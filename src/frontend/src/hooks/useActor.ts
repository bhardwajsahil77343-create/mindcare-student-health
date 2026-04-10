import { useActor as useActorBase } from "@caffeineai/core-infrastructure";
import { createActor } from "../backend";
import type { ActorInterface } from "../types/appTypes";

export function useActor(): {
  actor: ActorInterface | null;
  isFetching: boolean;
} {
  const result = useActorBase(
    createActor as Parameters<typeof useActorBase>[0],
  );
  return result as { actor: ActorInterface | null; isFetching: boolean };
}
