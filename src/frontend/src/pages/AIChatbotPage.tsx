import {
  Bot,
  ChevronLeft,
  MessageSquarePlus,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Page } from "../App";

interface Props {
  navigate: (p: Page) => void;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
}

const STORAGE_KEY = "mindcare_ai_sessions";
const MAX_SESSIONS = 20;

// ─── AI Response Engine ───────────────────────────────────────────────────────

const responses: Record<string, string[]> = {
  crisis: [
    "I'm really concerned about what you've shared. Please reach out to the 988 Suicide & Crisis Lifeline by calling or texting **988** — they're available 24/7 and trained to help. You don't have to go through this alone. Are you in a safe place right now?",
    "What you're feeling matters deeply, and I want you to get the support you deserve. Please contact the **988 Suicide & Crisis Lifeline** immediately (call or text 988). If you're in immediate danger, call 911. I'm here with you — please reach out for help right now.",
  ],
  anxiety: [
    "Anxiety can feel overwhelming, especially in a college environment with so many pressures. One technique that often helps is the 4-7-8 breathing method: inhale for 4 counts, hold for 7, exhale for 8. Would you like to talk about what's specifically triggering your anxiety?",
    "It makes sense that you're feeling anxious — college brings a lot of uncertainty and pressure. Grounding exercises can help. Try naming 5 things you can see, 4 you can touch, 3 you can hear. What's been weighing on your mind most?",
    "Anxiety often comes from focusing on 'what ifs.' Let's gently bring your attention back to the present. What's one small thing you could do in the next 10 minutes to feel slightly more in control?",
  ],
  stress: [
    "Stress is your body's signal that something needs attention. It's valid to feel this way. Often, breaking overwhelming tasks into tiny steps helps reduce the mental load. What's causing you the most stress right now?",
    "When we're stressed, our nervous system goes into overdrive. Even a 5-minute walk or stepping outside can genuinely shift your body chemistry. What does your current week look like — is there anything we can think through together?",
    "You're carrying a lot. Let's acknowledge that first. Stress becomes more manageable when we identify what's within our control versus what isn't. Can you tell me more about your situation?",
  ],
  exams: [
    "Exam pressure is one of the most common things students come to talk about. Your worth isn't defined by a grade — that's something worth reminding yourself of. Have you been able to take breaks while studying?",
    "Study anxiety is real. One helpful approach is the Pomodoro method: 25 minutes of focused study, then a 5-minute break. Your brain actually consolidates memory better with rest. How are you sleeping during this exam period?",
    "Exams can feel like everything is on the line, but they're just one data point in a long journey. What subject or topic is giving you the most trouble right now?",
  ],
  depression: [
    "I hear you, and I want you to know that what you're experiencing is real and valid. Depression can make even small tasks feel monumental. Have you been able to talk to anyone about how you've been feeling lately?",
    "Thank you for trusting me with something so personal. Depression often tells us lies — that things won't get better, that we're alone. But those are symptoms, not truths. Have you considered speaking with a counselor or therapist on campus?",
    "Feeling low for an extended period is exhausting and you deserve proper support. I'd gently encourage you to reach out to your campus counseling center. In the meantime, small acts — sunlight, movement, connection — can provide a little relief.",
  ],
  sadness: [
    "It's okay to feel sad. Emotions are messengers — they're telling you something needs tending to. Can you share a bit more about what's been bringing you down?",
    "Sadness is part of the human experience, and you don't have to rush through it. Sometimes just naming what we're feeling helps. What happened recently that's left you feeling this way?",
    "I'm glad you're talking about it. Sadness often lifts when we allow ourselves to feel it rather than push it aside. Is there someone in your life you've been able to lean on?",
  ],
  sleep: [
    "Sleep is foundational to mental health — everything feels harder when we're sleep-deprived. Are you having trouble falling asleep, staying asleep, or waking too early?",
    "Poor sleep and mental health have a two-way relationship. A few things that can help: keeping a consistent sleep schedule, no screens 30 minutes before bed, and keeping your room cool and dark. What does your sleep routine look like?",
    "Sleep struggles in college are incredibly common with irregular schedules and stress. Have you noticed a pattern — like racing thoughts at night or feeling restless?",
  ],
  relationships: [
    "Relationship challenges can deeply affect our emotional wellbeing. Whether it's a friendship, romantic relationship, or family dynamic — they all matter. What's going on in your relationships?",
    "Navigating relationships is genuinely one of the harder parts of college life. Communication, boundaries, and self-awareness are key. Can you tell me more about what's been difficult?",
    "It sounds like something in your relationships is causing you pain. That's worth exploring. Sometimes writing out our feelings before a difficult conversation can help clarify what we really want to say.",
  ],
  loneliness: [
    "Loneliness is surprisingly common in college, even surrounded by people. The transition to college can disrupt existing connections before new ones form. How long have you been feeling this way?",
    "Feeling disconnected or invisible is a real kind of pain. Sometimes loneliness isn't about the number of people around us but the quality of our connections. Are there any spaces — clubs, classes, groups — where you feel even slightly more like yourself?",
    "You're not alone in feeling alone — many students feel exactly this way. It can help to start small: one conversation, one shared activity. Is there anyone you've wanted to connect with but haven't yet?",
  ],
  motivation: [
    "Loss of motivation often signals burnout or emotional exhaustion — not laziness. Your mind might be asking for a genuine rest. When did you last feel truly energized by something?",
    "Motivation tends to follow action, not precede it. Starting with something tiny — even just opening a notebook — can create momentum. What's one very small step you could take today?",
    "It's normal to feel unmotivated at certain points. Sometimes our values or goals have shifted and we haven't caught up yet. What originally brought you to college and does it still resonate with you?",
  ],
  anger: [
    "Anger is a valid emotion and often signals that a boundary has been crossed or a need isn't being met. What's been triggering your anger?",
    "Anger can feel like it controls us if we don't have tools to channel it. Physical release helps — exercise, tearing paper, cold water on your face. What happened that brought this up for you?",
    "It's okay to feel angry. The goal isn't to suppress it but to understand it. Underneath anger there's often hurt or fear. Does that resonate with what you're experiencing?",
  ],
  grief: [
    "Grief doesn't follow a timeline or a neat set of stages. It's messy and it comes in waves. I'm so sorry for what you're going through. Do you want to share what happened?",
    "Losing someone or something we love creates a profound absence. It takes as long as it takes, and there's no right way to grieve. Are you allowing yourself space to feel this?",
    "Grief can be exhausting in ways that are hard to explain to others. You deserve support — from people who care about you and possibly from a grief counselor. Have you had anyone to talk to?",
  ],
  panic: [
    "Panic attacks can feel terrifying, but they are not dangerous and they do pass. If you feel one coming on: slow your breath, feel your feet on the floor, and remind yourself you are safe. Have you experienced panic attacks before?",
    "During a panic attack, your nervous system has activated a false alarm. Grounding helps: press your feet firmly into the floor, hold something cold, and breathe slowly. How often are these happening?",
  ],
  social: [
    "Social anxiety can make everyday interactions feel like enormous ordeals. You're not alone in this — it's one of the most common challenges among college students. What situations feel most difficult?",
    "With social anxiety, avoidance often makes things harder over time. Gradual exposure — starting with lower-stakes interactions — can help rewire the nervous system's response. What's one small social situation you could practice this week?",
  ],
  eating: [
    "Our relationship with food is closely linked to our emotional state. Are you finding yourself eating more, less, or feeling disconnected from hunger cues? I want to make sure you're taking care of yourself physically too.",
    "Eating patterns often shift under stress or emotional difficulty. It's worth paying gentle attention to what your body needs. Have you spoken to anyone at the campus health center about this?",
  ],
  focus: [
    "Difficulty focusing can stem from stress, sleep deprivation, anxiety, or sometimes ADHD. What does 'can't focus' look like for you — is your mind racing, going blank, or easily distracted?",
    "Focus issues are really common, especially in the overstimulating environment of modern college life. Have you tried working in short sprints with clear goals? Even 15 minutes of intentional focus is better than an hour of scattered effort.",
  ],
  selfcare: [
    "Self-care isn't selfish — it's the foundation of everything else. How are you doing with the basics: sleep, food, movement, and social connection?",
    "Taking care of yourself in small, consistent ways makes a real difference over time. What's one self-care practice you know helps you but you've been neglecting?",
  ],
  general: [
    "Thank you for sharing that with me. I want to make sure I understand — can you tell me more about what's been going on?",
    "It sounds like you've been dealing with quite a bit. I'm here to listen. What feels most pressing for you right now?",
    "I appreciate you opening up. Sometimes just putting things into words helps clarify our feelings. What would feel most supportive to you in this moment?",
    "That sounds genuinely difficult, and your feelings make complete sense. How long have you been experiencing this?",
    "I hear you. You're taking a brave step by talking about this. What kind of support are you hoping for today — just to be heard, or also some strategies?",
    "You deserve to feel supported and understood. What's been weighing most heavily on you recently?",
  ],
  greeting: [
    "Hello! I'm MindCare AI, your supportive mental wellness companion. I'm here to listen without judgment, offer coping strategies, and help you navigate whatever you're going through. How are you feeling today?",
    "Hi there! Welcome to MindCare AI. I'm here to support your mental wellbeing — whether you need to talk, vent, or find some strategies to cope. What's on your mind?",
    "Hey! I'm so glad you're here. This is a safe, non-judgmental space for you to share whatever you're feeling. What would you like to talk about today?",
  ],
  thanks: [
    "You're very welcome. Remember, reaching out for support is a sign of strength, not weakness. I'm always here whenever you need to talk.",
    "I'm glad I could be here for you. Take care of yourself, and don't hesitate to come back anytime.",
    "It means a lot that you shared with me. You're doing great by taking care of your mental health. Come back anytime.",
  ],
};

function pick(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getMentalHealthResponse(message: string): string {
  const lower = message.toLowerCase();

  const crisisWords = [
    "suicide",
    "kill myself",
    "end my life",
    "don't want to live",
    "want to die",
    "self-harm",
    "hurt myself",
    "overdose",
  ];
  if (crisisWords.some((w) => lower.includes(w))) return pick(responses.crisis);

  const greetings = [
    "hello",
    "hi ",
    "hey",
    "hi!",
    "good morning",
    "good evening",
    "good afternoon",
    "howdy",
  ];
  if (greetings.some((w) => lower.startsWith(w) || lower === w.trim()))
    return pick(responses.greeting);

  const thanksWords = ["thank", "thanks", "grateful", "appreciate"];
  if (thanksWords.some((w) => lower.includes(w))) return pick(responses.thanks);

  if (["panic attack", "panicking", "panic"].some((w) => lower.includes(w)))
    return pick(responses.panic);
  if (
    [
      "social anxiety",
      "social situations",
      "talking to people",
      "meeting people",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.social);
  if (
    [
      "anxious",
      "anxiety",
      "nervous",
      "worry",
      "worried",
      "fear",
      "scared",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.anxiety);
  if (
    [
      "exam",
      "test",
      "assignment",
      "grade",
      "study",
      "studying",
      "finals",
      "midterm",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.exams);
  if (
    [
      "stress",
      "stressed",
      "overwhelm",
      "overwhelmed",
      "pressure",
      "too much",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.stress);
  if (
    [
      "depress",
      "hopeless",
      "numb",
      "empty",
      "worthless",
      "nothing matters",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.depression);
  if (
    ["sad", "sadness", "unhappy", "down", "blue", "crying", "cry"].some((w) =>
      lower.includes(w),
    )
  )
    return pick(responses.sadness);
  if (
    ["sleep", "insomnia", "tired", "exhausted", "can't sleep", "wake up"].some(
      (w) => lower.includes(w),
    )
  )
    return pick(responses.sleep);
  if (
    ["lonely", "alone", "isolated", "no friends", "loneliness", "no one"].some(
      (w) => lower.includes(w),
    )
  )
    return pick(responses.loneliness);
  if (
    [
      "relationship",
      "boyfriend",
      "girlfriend",
      "partner",
      "friend",
      "family",
      "breakup",
      "broke up",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.relationships);
  if (
    [
      "motivation",
      "motivated",
      "lazy",
      "procrastinat",
      "can't start",
      "give up",
    ].some((w) => lower.includes(w))
  )
    return pick(responses.motivation);
  if (
    ["angry", "anger", "furious", "mad", "rage", "frustrated"].some((w) =>
      lower.includes(w),
    )
  )
    return pick(responses.anger);
  if (
    ["grief", "loss", "lost", "death", "died", "passed away", "mourning"].some(
      (w) => lower.includes(w),
    )
  )
    return pick(responses.grief);
  if (
    ["eating", "food", "appetite", "eat", "binge", "starving"].some((w) =>
      lower.includes(w),
    )
  )
    return pick(responses.eating);
  if (
    ["focus", "concentrate", "distracted", "adhd", "attention"].some((w) =>
      lower.includes(w),
    )
  )
    return pick(responses.focus);
  if (
    ["self-care", "self care", "taking care", "wellness", "wellbeing"].some(
      (w) => lower.includes(w),
    )
  )
    return pick(responses.selfcare);

  return pick(responses.general);
}

// ─── Session Helpers ──────────────────────────────────────────────────────────

function loadSessions(): ChatSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions: ChatSession[]) {
  const pruned = sessions.slice(0, MAX_SESSIONS);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pruned));
}

function createSession(): ChatSession {
  return {
    id: crypto.randomUUID(),
    title: "New Conversation",
    messages: [],
    createdAt: Date.now(),
  };
}

// ─── Typing Indicator ────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="w-8 h-8 rounded-full bg-[#F2D8D8] flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-[#C04444]" />
      </div>
      <div className="bg-[#FDF5F5] border border-[#F0D8D8] rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
        {[0, 200, 400].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 rounded-full bg-[#C04444] inline-block"
            style={{
              animation: "typingBounce 1.2s ease-in-out infinite",
              animationDelay: `${delay}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Starter Prompts ──────────────────────────────────────────────────────────

const STARTER_PROMPTS = [
  "I'm feeling anxious about exams",
  "I've been struggling to sleep",
  "I feel overwhelmed with coursework",
  "I'm feeling lonely on campus",
  "How do I manage stress?",
];

// ─── Main Component ───────────────────────────────────────────────────────────

export function AIChatbotPage({ navigate: _navigate }: Props) {
  const [sessions, setSessions] = useState<ChatSession[]>(() => loadSessions());
  const [activeId, setActiveId] = useState<string>(() => {
    const s = loadSessions();
    if (s.length > 0) return s[0].id;
    const fresh = createSession();
    saveSessions([fresh]);
    return fresh.id;
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const activeSession = sessions.find((s) => s.id === activeId);

  // Sync sessions from localStorage on first load
  useEffect(() => {
    const loaded = loadSessions();
    if (loaded.length === 0) {
      const fresh = createSession();
      saveSessions([fresh]);
      setSessions([fresh]);
      setActiveId(fresh.id);
    } else {
      setSessions(loaded);
      setActiveId(loaded[0].id);
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeSession?.messages.length, isTyping]);

  function updateSessions(updated: ChatSession[]) {
    setSessions(updated);
    saveSessions(updated);
  }

  function handleNewChat() {
    const fresh = createSession();
    const updated = [fresh, ...sessions].slice(0, MAX_SESSIONS);
    updateSessions(updated);
    setActiveId(fresh.id);
    setInput("");
  }

  function handleDeleteSession(id: string) {
    const updated = sessions.filter((s) => s.id !== id);
    if (updated.length === 0) {
      const fresh = createSession();
      updateSessions([fresh]);
      setActiveId(fresh.id);
    } else {
      updateSessions(updated);
      if (activeId === id) setActiveId(updated[0].id);
    }
  }

  async function sendMessage(text: string) {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: text.trim(),
      timestamp: Date.now(),
    };

    const updatedSessions = sessions.map((s) => {
      if (s.id !== activeId) return s;
      const msgs = [...s.messages, userMsg];
      const title =
        s.messages.length === 0 ? text.trim().slice(0, 40) : s.title;
      return { ...s, messages: msgs, title };
    });
    updateSessions(updatedSessions);
    setInput("");
    setIsTyping(true);

    const delay = 800 + Math.random() * 400;
    await new Promise((r) => setTimeout(r, delay));

    const aiContent = getMentalHealthResponse(text.trim());
    const aiMsg: ChatMessage = {
      role: "assistant",
      content: aiContent,
      timestamp: Date.now(),
    };

    setSessions((prev) => {
      const next = prev.map((s) =>
        s.id === activeId ? { ...s, messages: [...s.messages, aiMsg] } : s,
      );
      saveSessions(next);
      return next;
    });
    setIsTyping(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    const now = new Date();
    if (d.toDateString() === now.toDateString())
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  return (
    <>
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        .ai-chat-scrollbar::-webkit-scrollbar { width: 4px; }
        .ai-chat-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .ai-chat-scrollbar::-webkit-scrollbar-thumb { background: #E9D8D8; border-radius: 2px; }
        .prose-ai p { margin: 0; }
        .prose-ai strong { font-weight: 600; color: inherit; }
      `}</style>

      <div
        className="flex bg-[#FAFAF8]"
        style={{ height: "calc(100vh - 64px)" }}
      >
        {/* ── Sidebar ── */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 260, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="flex-shrink-0 overflow-hidden border-r border-[#EDE8E3] bg-[#FDF5F5] flex flex-col"
            >
              <div className="p-4 border-b border-[#EDE8E3]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#C04444] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#111] text-sm leading-none">
                      MindCare AI
                    </p>
                    <p className="text-[10px] text-[#9A7A7A] mt-0.5">
                      Mental Wellness Assistant
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  data-ocid="ai_chat.new_chat_button"
                  onClick={handleNewChat}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-[#C04444] text-white text-sm font-semibold rounded-xl hover:bg-[#A03535] transition-colors shadow-sm"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  New Chat
                </button>
              </div>

              <div className="flex-1 overflow-y-auto ai-chat-scrollbar p-2">
                {sessions.length === 0 && (
                  <p className="text-xs text-[#B09A9A] text-center mt-6">
                    No conversations yet
                  </p>
                )}
                <AnimatePresence>
                  {sessions.map((s) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className={`group relative flex items-start gap-2 px-3 py-2.5 rounded-xl cursor-pointer mb-1 transition-colors ${
                        s.id === activeId
                          ? "bg-[#F2D8D8] text-[#111]"
                          : "hover:bg-[#F7ECEC] text-[#444]"
                      }`}
                      onClick={() => setActiveId(s.id)}
                      data-ocid={`ai_chat.item.${sessions.indexOf(s) + 1}`}
                    >
                      <MessageSquarePlus className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#C04444]" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">
                          {s.title}
                        </p>
                        <p className="text-[10px] text-[#9A8A8A] mt-0.5">
                          {formatDate(s.createdAt)}
                        </p>
                      </div>
                      <button
                        type="button"
                        data-ocid={`ai_chat.delete_button.${sessions.indexOf(s) + 1}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSession(s.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:text-[#C04444]"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-3 border-t border-[#EDE8E3]">
                <p className="text-[10px] text-[#B09A9A] text-center leading-relaxed">
                  This is a supportive AI, not a substitute for professional
                  care.
                </p>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* ── Main Chat Area ── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <div className="h-14 px-4 border-b border-[#EDE8E3] bg-white flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              data-ocid="ai_chat.toggle"
              onClick={() => setSidebarOpen((v) => !v)}
              className="p-1.5 rounded-lg hover:bg-[#F2D8D8] transition-colors text-[#C04444]"
            >
              <ChevronLeft
                className="w-4 h-4 transition-transform"
                style={{
                  transform: sidebarOpen ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
            </button>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#C04444]" />
              <p className="font-semibold text-[#111] text-sm">
                {activeSession?.title || "New Conversation"}
              </p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-green-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Online
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto ai-chat-scrollbar px-4 md:px-8 py-6 space-y-4">
            {(!activeSession || activeSession.messages.length === 0) &&
            !isTyping ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full min-h-[300px] gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F2D8D8] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#C04444]" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-[#111] mb-1">
                    MindCare AI
                  </h2>
                  <p className="text-sm text-[#7A6A6A] max-w-xs">
                    Your confidential mental wellness companion. Share what's on
                    your mind.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center max-w-lg">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      data-ocid="ai_chat.primary_button"
                      onClick={() => sendMessage(prompt)}
                      className="px-4 py-2 text-sm bg-white border border-[#E9D8D8] text-[#444] rounded-full hover:bg-[#F2D8D8] hover:border-[#C04444] hover:text-[#C04444] transition-all"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <>
                <AnimatePresence initial={false}>
                  {activeSession?.messages.map((msg, i) => (
                    <motion.div
                      key={`${activeSession.id}-${i}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-end gap-3 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-[#F2D8D8] flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-[#C04444]" />
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl max-w-xs md:max-w-lg text-sm leading-relaxed prose-ai ${
                          msg.role === "user"
                            ? "bg-[#C04444] text-white rounded-br-none"
                            : "bg-white border border-[#E9D8D8] text-[#2A2A2A] rounded-bl-none shadow-sm"
                        }`}
                        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled AI content with markdown
                        dangerouslySetInnerHTML={{
                          __html: msg.content
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\n/g, "<br/>"),
                        }}
                      />
                      {msg.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-[#C04444] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                          Y
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && <TypingIndicator />}
              </>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="px-4 md:px-8 py-4 border-t border-[#EDE8E3] bg-white">
            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-3 max-w-3xl mx-auto"
            >
              <textarea
                ref={inputRef}
                data-ocid="ai_chat.textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Share what's on your mind... (Enter to send)"
                rows={1}
                className="flex-1 resize-none px-4 py-3 border border-[#E9D8D8] rounded-2xl text-sm focus:outline-none focus:border-[#C04444] transition-colors bg-[#FAFAF8] leading-relaxed"
                style={{ maxHeight: "120px" }}
              />
              <button
                type="submit"
                data-ocid="ai_chat.submit_button"
                disabled={!input.trim() || isTyping}
                className="p-3 bg-[#C04444] text-white rounded-2xl hover:bg-[#A03535] transition-colors disabled:opacity-50 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-[#B09A9A] text-center mt-2">
              MindCare AI is not a crisis service. In emergencies, call{" "}
              <strong>988</strong> or <strong>911</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
