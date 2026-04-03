import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:base/Time";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type Counselor = {
    id : Nat;
    name : Text;
    specialty : Text;
    bio : Text;
    availability : Text;
    photoUrl : Text;
    isActive : Bool;
  };

  module Counselor {
    public func compare(counselor1 : Counselor, counselor2 : Counselor) : Order.Order {
      Nat.compare(counselor1.id, counselor2.id);
    };
  };

  type StudentProfile = {
    principal : Principal;
    name : Text;
    email : Text;
    assignedCounselorId : ?Nat;
  };

  module StudentProfile {
    public func compare(studentProfile1 : StudentProfile, studentProfile2 : StudentProfile) : Order.Order {
      Principal.compare(studentProfile1.principal, studentProfile2.principal);
    };
  };

  type ChatMessage = {
    id : Nat;
    fromPrincipal : Principal;
    toPrincipal : Principal;
    content : Text;
    timestamp : Int;
  };

  module ChatMessage {
    public func compare(chatMessage1 : ChatMessage, chatMessage2 : ChatMessage) : Order.Order {
      Nat.compare(chatMessage1.id, chatMessage2.id);
    };
  };

  type CheckupReminder = {
    studentPrincipal : Principal;
    lastCheckupDate : Int;
    nextDueDate : Int;
  };

  module CheckupReminder {
    public func compare(checkupReminder1 : CheckupReminder, checkupReminder2 : CheckupReminder) : Order.Order {
      Principal.compare(checkupReminder1.studentPrincipal, checkupReminder2.studentPrincipal);
    };
  };

  public type UserProfile = {
    name : Text;
    email : Text;
  };

  // State
  let counselors = Map.empty<Nat, Counselor>();
  let studentProfiles = Map.empty<Principal, StudentProfile>();
  let messages = Map.empty<Nat, ChatMessage>();
  let reminders = Map.empty<Principal, CheckupReminder>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  var nextCounselorId = 1;
  var nextMessageId = 1;

  // Pre-seed counselors on initialization
  let sampleCounselors : [Counselor] = [
    {
      id = 1;
      name = "Dr. Alice Smith";
      specialty = "Anxiety & Stress Management";
      bio = "Experienced counselor specializing in college student mental health. Dr. Smith uses evidence-based techniques to help students manage stress and anxiety.";
      availability = "Mon-Fri 9am-5pm";
      photoUrl = "";
      isActive = true;
    },
    {
      id = 2;
      name = "Dr. Bob Johnson";
      specialty = "Depression & Mood Disorders";
      bio = "Passionate about supporting students through challenging times. Dr. Johnson brings compassion and expertise to every session.";
      availability = "Tue-Thu 10am-4pm";
      photoUrl = "";
      isActive = true;
    },
    {
      id = 3;
      name = "Dr. Carol Lee";
      specialty = "Relationship Counseling";
      bio = "Helping students navigate personal and academic stressors. Dr. Lee focuses on building healthy relationships and communication skills.";
      availability = "Mon, Wed, Fri 11am-3pm";
      photoUrl = "";
      isActive = true;
    },
    {
      id = 4;
      name = "Dr. Marcus Rivera";
      specialty = "Academic Stress & Burnout";
      bio = "Specializes in helping students overcome academic pressure and avoid burnout. Dr. Rivera provides practical tools for time management and resilience.";
      availability = "Mon-Wed 8am-2pm";
      photoUrl = "";
      isActive = true;
    },
    {
      id = 5;
      name = "Dr. Sarah Nguyen";
      specialty = "Trauma & PTSD";
      bio = "Dedicated to helping students heal from past trauma. Dr. Nguyen offers a safe and non-judgmental space for recovery and growth.";
      availability = "Thu-Fri 9am-3pm";
      photoUrl = "";
      isActive = true;
    },
    {
      id = 6;
      name = "Dr. James Patel";
      specialty = "Identity & Cultural Issues";
      bio = "Supports students navigating questions of identity, culture, and belonging. Dr. Patel is committed to inclusive and culturally sensitive care.";
      availability = "Mon, Tue, Thu 10am-5pm";
      photoUrl = "";
      isActive = true;
    },
  ];

  for (c in sampleCounselors.vals()) {
    counselors.add(c.id, c);
  };
  nextCounselorId := sampleCounselors.size() + 1;

  // Safe role helpers that do NOT trap for unregistered users
  private func callerIsAdmin(caller : Principal) : Bool {
    switch (accessControlState.userRoles.get(caller)) {
      case (?#admin) { true };
      case _ { false };
    };
  };

  private func callerIsAuthenticated(caller : Principal) : Bool {
    if (caller.isAnonymous()) { return false };
    switch (accessControlState.userRoles.get(caller)) {
      case (?_) { true };
      case null { false };
    };
  };

  // Built-in AI counselor response engine (no external API needed)
  private func containsKeyword(msg : Text, keyword : Text) : Bool {
    let lowerMsg = msg.toLower();
    let lowerKw = keyword.toLower();
    lowerMsg.contains(#text lowerKw);
  };

  private func generateCounselorResponse(content : Text) : Text {
    // Crisis / suicidal ideation - highest priority
    if (
      containsKeyword(content, "suicide") or
      containsKeyword(content, "kill myself") or
      containsKeyword(content, "end my life") or
      containsKeyword(content, "don't want to live") or
      containsKeyword(content, "want to die")
    ) {
      return "I'm really glad you reached out, and I want you to know I take what you're sharing very seriously. Please contact the 988 Suicide & Crisis Lifeline right now by calling or texting 988 — they're available 24/7. You are not alone, and help is available. Can you tell me more about what you're going through?";
    };

    // Anxiety / stress
    if (
      containsKeyword(content, "anxious") or
      containsKeyword(content, "anxiety") or
      containsKeyword(content, "stressed") or
      containsKeyword(content, "stress") or
      containsKeyword(content, "overwhelmed") or
      containsKeyword(content, "panic") or
      containsKeyword(content, "nervous") or
      containsKeyword(content, "worried") or
      containsKeyword(content, "worry")
    ) {
      return "It sounds like you're carrying a lot right now, and that takes real courage to acknowledge. Anxiety and stress are very common among college students. Let's try a quick grounding exercise: take a slow, deep breath in for 4 counts, hold for 4, then out for 4. How are you feeling in your body right now? What's been the biggest source of stress lately?";
    };

    // Depression / sadness
    if (
      containsKeyword(content, "depressed") or
      containsKeyword(content, "depression") or
      containsKeyword(content, "sad") or
      containsKeyword(content, "hopeless") or
      containsKeyword(content, "empty") or
      containsKeyword(content, "worthless") or
      containsKeyword(content, "crying") or
      containsKeyword(content, "unmotivated") or
      containsKeyword(content, "numb")
    ) {
      return "Thank you for trusting me with this. Feeling depressed or persistently sad is incredibly hard, and you don't have to face it alone. Depression can affect energy, motivation, and the way we see ourselves and the world. Can you tell me how long you've been feeling this way, and is there anything specific that may have triggered it? There are effective strategies we can work on together.";
    };

    // Loneliness / isolation
    if (
      containsKeyword(content, "lonely") or
      containsKeyword(content, "alone") or
      containsKeyword(content, "isolated") or
      containsKeyword(content, "no friends") or
      containsKeyword(content, "nobody cares") or
      containsKeyword(content, "no one understands")
    ) {
      return "Feeling lonely — especially in a place as busy as a college campus — is more common than most people realize, and it's a real and painful experience. Connection is a fundamental human need. I want you to know that reaching out here is already a meaningful step. What does your social life look like right now? Are there activities or groups you've considered joining?";
    };

    // Sleep problems
    if (
      containsKeyword(content, "sleep") or
      containsKeyword(content, "insomnia") or
      containsKeyword(content, "can't sleep") or
      containsKeyword(content, "tired") or
      containsKeyword(content, "exhausted") or
      containsKeyword(content, "fatigue")
    ) {
      return "Sleep is foundational to mental and physical health, so it makes sense that this is affecting you. Poor sleep can intensify anxiety, low mood, and difficulty concentrating. A few things that often help: keeping a consistent sleep/wake time, avoiding screens an hour before bed, and limiting caffeine after noon. What does your typical nighttime routine look like? Let's see what we can adjust together.";
    };

    // Academic pressure
    if (
      containsKeyword(content, "exam") or
      containsKeyword(content, "study") or
      containsKeyword(content, "grades") or
      containsKeyword(content, "fail") or
      containsKeyword(content, "assignment") or
      containsKeyword(content, "deadline") or
      containsKeyword(content, "college") or
      containsKeyword(content, "burnout") or
      containsKeyword(content, "procrastinat")
    ) {
      return "Academic pressure is one of the most common stressors I see in college students, and it can feel all-consuming. It's important to remember that your worth is not defined by your grades. Let's talk about what's making things feel unmanageable right now — is it time pressure, fear of failure, or something else? We can work on building a plan that feels more sustainable.";
    };

    // Relationship issues
    if (
      containsKeyword(content, "relationship") or
      containsKeyword(content, "breakup") or
      containsKeyword(content, "boyfriend") or
      containsKeyword(content, "girlfriend") or
      containsKeyword(content, "partner") or
      containsKeyword(content, "family") or
      containsKeyword(content, "parents") or
      containsKeyword(content, "friend") or
      containsKeyword(content, "argument") or
      containsKeyword(content, "conflict")
    ) {
      return "Relationships — whether romantic, family, or friendships — can be a great source of support but also significant stress. It takes self-awareness to recognize when a relationship is impacting your wellbeing. I'm here to help you work through this without judgment. Can you tell me more about the situation? What feels most difficult about it right now?";
    };

    // Trauma
    if (
      containsKeyword(content, "trauma") or
      containsKeyword(content, "abuse") or
      containsKeyword(content, "ptsd") or
      containsKeyword(content, "flashback") or
      containsKeyword(content, "assault") or
      containsKeyword(content, "nightmare") or
      containsKeyword(content, "triggered")
    ) {
      return "I hear you, and I want you to know that what you've been through is not your fault. Trauma can have deep and lasting effects, and it takes real bravery to talk about it. You're in a safe space here. We'll go at whatever pace feels right for you. Would you like to share a little more about what you're experiencing, or would you prefer to talk about coping strategies first?";
    };

    // Identity / cultural issues
    if (
      containsKeyword(content, "identity") or
      containsKeyword(content, "culture") or
      containsKeyword(content, "belong") or
      containsKeyword(content, "race") or
      containsKeyword(content, "discrimination") or
      containsKeyword(content, "sexuality") or
      containsKeyword(content, "gender") or
      containsKeyword(content, "lgbtq") or
      containsKeyword(content, "coming out")
    ) {
      return "Questions of identity and belonging are deeply personal, and it's completely valid to find them challenging — especially in a new environment like college. I want to create a safe, affirming space where you can explore these feelings without judgment. What aspects of your identity feel most in tension right now? I'm here to listen and support you.";
    };

    // Anger
    if (
      containsKeyword(content, "angry") or
      containsKeyword(content, "anger") or
      containsKeyword(content, "frustrated") or
      containsKeyword(content, "furious") or
      containsKeyword(content, "rage") or
      containsKeyword(content, "annoyed")
    ) {
      return "Anger is a completely valid emotion, and it often signals that something important to us feels threatened or unfair. The key is understanding what's underneath it. When we feel intense anger, it can help to pause and ask: what am I really feeling below the surface — hurt, fear, or disrespect? Can you walk me through what happened that brought up these feelings?";
    };

    // Greetings
    if (
      containsKeyword(content, "hello") or
      containsKeyword(content, "hi") or
      containsKeyword(content, "hey") or
      containsKeyword(content, "good morning") or
      containsKeyword(content, "good afternoon") or
      containsKeyword(content, "good evening")
    ) {
      return "Hello! I'm so glad you reached out today. This is a safe and confidential space for you. How are you feeling right now? Please feel free to share whatever is on your mind — there is no right or wrong way to start.";
    };

    // How are you / check-in
    if (
      containsKeyword(content, "how are you") or
      containsKeyword(content, "feeling") or
      containsKeyword(content, "feel") or
      containsKeyword(content, "mood")
    ) {
      return "I appreciate you checking in. More importantly, I'm here to focus on how YOU are doing. On a scale of 1 to 10, how would you rate your overall emotional wellbeing today? And what has been weighing on your mind the most recently?";
    };

    // Help / support seeking
    if (
      containsKeyword(content, "help") or
      containsKeyword(content, "support") or
      containsKeyword(content, "advice") or
      containsKeyword(content, "don't know what to do") or
      containsKeyword(content, "lost")
    ) {
      return "Asking for help is one of the bravest and most important things you can do for your mental health. I'm here for you. To best support you, can you share a little more about what's going on? What's been the most challenging part of your day or week?";
    };

    // Default / general fallback
    "Thank you for sharing that with me. I want to make sure I understand what you're going through. Could you tell me a bit more? How long have you been feeling this way, and how is it affecting your daily life? I'm here to listen without judgment and work through this with you at your own pace.";
  };

  // Auto-register caller: first caller becomes admin, subsequent callers become users.
  // Safe to call multiple times (idempotent).
  public shared ({ caller }) func initializeUser() : async () {
    if (caller.isAnonymous()) { return };
    switch (accessControlState.userRoles.get(caller)) {
      case (?_) { return }; // already registered
      case null {
        if (not accessControlState.adminAssigned) {
          accessControlState.userRoles.add(caller, #admin);
          accessControlState.adminAssigned := true;
        } else {
          accessControlState.userRoles.add(caller, #user);
        };
      };
    };
  };

  // User profile management (required by frontend)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not callerIsAdmin(caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Seed sample counselors (admin only, no-op if counselors already exist)
  public shared ({ caller }) func seedSampleCounselors() : async () {
    if (not callerIsAdmin(caller)) {
      Runtime.trap("Unauthorized: Only admins can seed sample counselors");
    };
    // counselors are already seeded at initialization
  };

  // Counselor CRUD
  public shared ({ caller }) func addCounselor(counselor : Counselor) : async Nat {
    if (not callerIsAdmin(caller)) {
      Runtime.trap("Unauthorized: Only admins can add counselors");
    };
    let id = nextCounselorId;
    let newCounselor : Counselor = {
      counselor with
      id;
    };
    counselors.add(id, newCounselor);
    nextCounselorId += 1;
    id;
  };

  public shared ({ caller }) func updateCounselor(counselor : Counselor) : async () {
    if (not callerIsAdmin(caller)) {
      Runtime.trap("Unauthorized: Only admins can update counselors");
    };
    if (not counselors.containsKey(counselor.id)) {
      Runtime.trap("Counselor with this id does not exist");
    };
    counselors.add(counselor.id, counselor);
  };

  public shared ({ caller }) func removeCounselor(id : Nat) : async () {
    if (not callerIsAdmin(caller)) {
      Runtime.trap("Unauthorized: Only admins can remove counselors");
    };
    if (not counselors.containsKey(id)) {
      Runtime.trap("Counselor with this id does not exist");
    };
    counselors.remove(id);
  };

  public query func getCounselor(id : Nat) : async Counselor {
    switch (counselors.get(id)) {
      case (null) { Runtime.trap("Counselor not found") };
      case (?counselor) { counselor };
    };
  };

  public query func listCounselors() : async [Counselor] {
    counselors.values().toArray().sort();
  };

  // Student profile
  public shared ({ caller }) func registerStudent(name : Text, email : Text) : async () {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can register as students");
    };
    if (studentProfiles.containsKey(caller)) {
      Runtime.trap("This user is already registered.");
    };
    let profile : StudentProfile = {
      principal = caller;
      name;
      email;
      assignedCounselorId = null;
    };
    studentProfiles.add(caller, profile);
  };

  public query ({ caller }) func getMyProfile() : async StudentProfile {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can view their profile");
    };
    switch (studentProfiles.get(caller)) {
      case (null) { Runtime.trap("User is not registered yet") };
      case (?profile) { profile };
    };
  };

  // Counselor assignment
  public shared ({ caller }) func assignCounselor(counselorId : Nat) : async () {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can assign counselors");
    };
    // Auto-create student profile if needed
    let profile = switch (studentProfiles.get(caller)) {
      case (null) {
        let newProfile : StudentProfile = {
          principal = caller;
          name = "Student";
          email = "";
          assignedCounselorId = null;
        };
        studentProfiles.add(caller, newProfile);
        newProfile;
      };
      case (?profile) { profile };
    };
    switch (counselors.get(counselorId)) {
      case (null) { Runtime.trap("Counselor not found") };
      case (_) {};
    };
    let updatedProfile : StudentProfile = {
      profile with
      assignedCounselorId = ?counselorId;
    };
    studentProfiles.add(caller, updatedProfile);
  };

  public query ({ caller }) func getMyAssignment() : async ?Nat {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can view their assignment");
    };
    switch (studentProfiles.get(caller)) {
      case (null) { null };
      case (?profile) { profile.assignedCounselorId };
    };
  };

  // Messaging with built-in AI auto-reply
  public shared ({ caller }) func sendMessage(toPrincipal : Principal, content : Text) : async Nat {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can send messages");
    };
    let now = Time.now();

    // Store the student's message
    let id = nextMessageId;
    let message : ChatMessage = {
      id;
      fromPrincipal = caller;
      toPrincipal;
      content;
      timestamp = now;
    };
    messages.add(id, message);
    nextMessageId += 1;

    // Generate and store the AI counselor reply
    let replyContent = generateCounselorResponse(content);
    let replyId = nextMessageId;
    let replyMessage : ChatMessage = {
      id = replyId;
      fromPrincipal = toPrincipal;
      toPrincipal = caller;
      content = replyContent;
      timestamp = now + 1; // +1 ns so it sorts after the student message
    };
    messages.add(replyId, replyMessage);
    nextMessageId += 1;

    id;
  };

  public query ({ caller }) func getMessages(withPrincipal : Principal) : async [ChatMessage] {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can view messages");
    };
    let filtered = messages.values().filter(
      func(msg) {
        (msg.fromPrincipal == caller and msg.toPrincipal == withPrincipal) or (msg.fromPrincipal == withPrincipal and msg.toPrincipal == caller)
      }
    );
    filtered.toArray().sort();
  };

  // Checkup reminders
  public shared ({ caller }) func setLastCheckup(lastCheckupDate : Int) : async () {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can set checkup reminders");
    };
    let reminder : CheckupReminder = {
      studentPrincipal = caller;
      lastCheckupDate;
      nextDueDate = lastCheckupDate + 7_776_000_000_000_000;
    };
    reminders.add(caller, reminder);
  };

  public query ({ caller }) func getMyReminder() : async CheckupReminder {
    if (not callerIsAuthenticated(caller)) {
      Runtime.trap("Unauthorized: Only authenticated users can view their reminders");
    };
    switch (reminders.get(caller)) {
      case (null) { Runtime.trap("No checkup reminder found") };
      case (?reminder) { reminder };
    };
  };
};
