import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ChatMessage {
    id: bigint;
    content: string;
    toPrincipal: Principal;
    fromPrincipal: Principal;
    timestamp: bigint;
}
export interface StudentProfile {
    principal: Principal;
    assignedCounselorId?: bigint;
    name: string;
    email: string;
}
export interface CheckupReminder {
    nextDueDate: bigint;
    studentPrincipal: Principal;
    lastCheckupDate: bigint;
}
export interface UserProfile {
    name: string;
    email: string;
}
export interface Counselor {
    id: bigint;
    bio: string;
    name: string;
    photoUrl: string;
    isActive: boolean;
    specialty: string;
    availability: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addCounselor(counselor: Counselor): Promise<bigint>;
    assignCounselor(counselorId: bigint): Promise<void>;
    assignRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCounselor(id: bigint): Promise<Counselor>;
    getMessages(withPrincipal: Principal): Promise<Array<ChatMessage>>;
    getMyAssignment(): Promise<bigint | null>;
    getMyProfile(): Promise<StudentProfile>;
    getMyReminder(): Promise<CheckupReminder>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getUserRole(): Promise<UserRole>;
    initializeUser(): Promise<void>;
    listCounselors(): Promise<Array<Counselor>>;
    registerStudent(name: string, email: string): Promise<void>;
    removeCounselor(id: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    seedSampleCounselors(): Promise<void>;
    sendMessage(toPrincipal: Principal, content: string): Promise<bigint>;
    setLastCheckup(lastCheckupDate: bigint): Promise<void>;
    updateCounselor(counselor: Counselor): Promise<void>;
}
