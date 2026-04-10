import { Principal } from "@icp-sdk/core/principal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { Page } from "../App";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import type { ChatMessage, Counselor } from "../types/appTypes";

interface Props {
  navigate: (p: Page) => void;
}

function counselorPrincipal(counselorId: bigint): Principal {
  return Principal.fromUint8Array(new Uint8Array([Number(counselorId)]));
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 justify-start">
      <div className="w-7 h-7 rounded-full bg-[#F2D8D8] flex-shrink-0" />
      <div className="bg-[#F6E6E6] border border-[#E9E6E2] rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
        <span
          className="w-2 h-2 rounded-full bg-[#C04444] inline-block"
          style={{
            animation: "typingBounce 1.2s ease-in-out infinite",
            animationDelay: "0ms",
          }}
        />
        <span
          className="w-2 h-2 rounded-full bg-[#C04444] inline-block"
          style={{
            animation: "typingBounce 1.2s ease-in-out infinite",
            animationDelay: "200ms",
          }}
        />
        <span
          className="w-2 h-2 rounded-full bg-[#C04444] inline-block"
          style={{
            animation: "typingBounce 1.2s ease-in-out infinite",
            animationDelay: "400ms",
          }}
        />
      </div>
    </div>
  );
}

export function ChatPage({ navigate }: Props) {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const [text, setText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const myPrincipal = identity?.getPrincipal();

  const { data: assignmentId } = useQuery<bigint | null>({
    queryKey: ["assignment"],
    queryFn: () => actor!.getMyAssignment(),
    enabled: !!actor && !!identity,
  });

  const { data: counselor } = useQuery<Counselor>({
    queryKey: ["counselor", assignmentId?.toString()],
    queryFn: () => actor!.getCounselor(assignmentId!),
    enabled: !!actor && !!assignmentId,
  });

  const counselorP = assignmentId ? counselorPrincipal(assignmentId) : null;

  const { data: messages, refetch } = useQuery<ChatMessage[]>({
    queryKey: ["messages", assignmentId?.toString()],
    queryFn: () => actor!.getMessages(counselorP!),
    enabled: !!actor && !!identity && !!counselorP,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMutation = useMutation({
    mutationFn: async (content: string) => {
      if (!counselorP) throw new Error("No counselor assigned");
      return actor!.sendMessage(counselorP, content);
    },
    onSuccess: () => {
      setText("");
      void refetch();
    },
    onError: () => toast.error("Failed to send message."),
  });

  if (!identity) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#111] mb-4">
          Please sign in to access chat
        </h2>
        <button
          type="button"
          onClick={() => navigate("login")}
          className="px-8 py-3 bg-[#C04444] text-white rounded-full font-semibold hover:bg-[#A03535] transition-colors"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div
          className="bg-white rounded-2xl shadow-sm border border-[#E9E6E2] overflow-hidden flex flex-col"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className="px-6 py-4 border-b border-[#E9E6E2] flex items-center gap-3 bg-[#FDF5F5]">
            {counselor ? (
              <>
                <div className="w-10 h-10 rounded-full bg-[#F2D8D8] overflow-hidden">
                  <img
                    src={
                      counselor.photoUrl ||
                      `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(counselor.name)}`
                    }
                    alt={counselor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#111] text-sm">
                    {counselor.name}
                  </p>
                  <p className="text-xs text-[#7A7A7A]">
                    {counselor.specialty}
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500" /> Online
                </span>
              </>
            ) : (
              <p className="text-sm text-[#7A7A7A]">
                No counselor assigned.{" "}
                <button
                  type="button"
                  onClick={() => navigate("counselors")}
                  className="text-[#C04444] underline"
                >
                  Browse counselors
                </button>
              </p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {(!messages || messages.length === 0) && (
              <div className="text-center py-10">
                <p className="text-[#7A7A7A] text-sm">
                  No messages yet. Start the conversation!
                </p>
                {counselor && (
                  <div className="mt-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F2D8D8] flex-shrink-0 overflow-hidden">
                      <img
                        src={`https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(counselor.name)}`}
                        alt={counselor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#F6E6E6] rounded-2xl rounded-tl-none px-4 py-3 max-w-xs text-left">
                      <p className="text-sm text-[#3A3A3A]">
                        Hello! I'm {counselor.name}. How are you feeling today?
                      </p>
                      <p className="text-xs text-[#7A7A7A] mt-1">Just now</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            {messages?.map((msg) => {
              const isMe = msg.fromPrincipal.toText() === myPrincipal?.toText();
              return (
                <div
                  key={msg.id.toString()}
                  className={`flex items-end gap-2 ${
                    isMe ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isMe && (
                    <div className="w-7 h-7 rounded-full bg-[#F2D8D8] flex-shrink-0" />
                  )}
                  <div
                    className={`px-4 py-2.5 rounded-2xl max-w-xs md:max-w-md text-sm ${
                      isMe
                        ? "bg-[#C04444] text-white rounded-br-none"
                        : "bg-[#F6E6E6] text-[#3A3A3A] rounded-bl-none border border-[#E9E6E2]"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        isMe ? "text-white/70" : "text-[#7A7A7A]"
                      }`}
                    >
                      {new Date(
                        Number(msg.timestamp) / 1_000_000,
                      ).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              );
            })}
            {sendMutation.isPending && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          <div className="px-6 py-4 border-t border-[#E9E6E2]">
            {!assignmentId ? (
              <div className="text-center text-sm text-[#7A7A7A]">
                <button
                  type="button"
                  onClick={() => navigate("counselors")}
                  className="text-[#C04444] underline font-semibold"
                >
                  Assign a counselor first
                </button>{" "}
                to start chatting.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (text.trim()) sendMutation.mutate(text.trim());
                }}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 border border-[#E9E6E2] rounded-full text-sm focus:outline-none focus:border-[#C04444] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!text.trim() || sendMutation.isPending}
                  className="px-5 py-2.5 bg-[#C04444] text-white text-sm font-semibold rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
