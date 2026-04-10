import type { Principal } from "@icp-sdk/core/principal";

export interface Counselor {
  id: bigint;
  name: string;
  specialty: string;
  bio: string;
  availability: string;
  photoUrl: string;
  isActive: boolean;
}

export interface ChatMessage {
  id: bigint;
  fromPrincipal: Principal;
  content: string;
  timestamp: bigint;
}

export interface CheckupReminder {
  lastCheckupDate: bigint;
  nextDueDate: bigint;
}

export interface StudentProfile {
  name: string;
  email: string;
}

export interface ActorInterface {
  // Admin
  isCallerAdmin(): Promise<boolean>;
  seedSampleCounselors(): Promise<void>;
  addCounselor(c: Counselor): Promise<void>;
  updateCounselor(c: Counselor): Promise<void>;
  removeCounselor(id: bigint): Promise<void>;
  // Counselors
  listCounselors(): Promise<Counselor[]>;
  getCounselor(id: bigint): Promise<Counselor>;
  assignCounselor(id: bigint): Promise<void>;
  // Chat
  getMyAssignment(): Promise<bigint | null>;
  getMessages(counselor: Principal): Promise<ChatMessage[]>;
  sendMessage(to: Principal, content: string): Promise<void>;
  // Student
  getMyProfile(): Promise<StudentProfile | undefined>;
  registerStudent(name: string, email: string): Promise<void>;
  // Reminders
  getMyReminder(): Promise<CheckupReminder>;
  setLastCheckup(timestamp: bigint): Promise<void>;
}
