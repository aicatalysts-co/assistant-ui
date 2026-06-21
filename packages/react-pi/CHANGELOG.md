# @assistant-ui/react-pi

## 0.0.5

### Patch Changes

- [#4474](https://github.com/assistant-ui/assistant-ui/pull/4474) [`58db391`](https://github.com/assistant-ui/assistant-ui/commit/58db391fa34d6c9c813876d5fa6b0ed118bc37b8) - refactor: adopt the shared createRuntimeExtras helper and split the accessor hooks and runtime types into hooks.ts and runtimeTypes.ts, with no public API or behavior change ([@okisdev](https://github.com/okisdev))

- Updated dependencies [[`ddc40b7`](https://github.com/assistant-ui/assistant-ui/commit/ddc40b7791563057749ecf1121e15d19574479ff), [`ea52de0`](https://github.com/assistant-ui/assistant-ui/commit/ea52de06368853b7af7ac6755b157ec5305a8494), [`3a8f685`](https://github.com/assistant-ui/assistant-ui/commit/3a8f685e23a3e7ad76ac41e3ce6fff05714e04d3)]:
  - @assistant-ui/core@0.2.19

## 0.0.4

### Patch Changes

- [#4422](https://github.com/assistant-ui/assistant-ui/pull/4422) [`e100f90`](https://github.com/assistant-ui/assistant-ui/commit/e100f906489f27d5193b6c8be80a6f87c5667850) - chore: update dependencies ([@Yonom](https://github.com/Yonom))

## 0.0.3

### Patch Changes

- [#4390](https://github.com/assistant-ui/assistant-ui/pull/4390) [`bb38d08`](https://github.com/assistant-ui/assistant-ui/commit/bb38d085b04b59f68c8cf16b23c2211454384668) - chore: update dependencies ([@Yonom](https://github.com/Yonom))

## 0.0.2

### Patch Changes

- [#4368](https://github.com/assistant-ui/assistant-ui/pull/4368) [`7cadd89`](https://github.com/assistant-ui/assistant-ui/commit/7cadd89576ea47523bd495276838d57ab33a1f1d) - feat: initial `@assistant-ui/react-pi` MVP — a Pi coding-agent runtime adapter ([@AVGVSTVS96](https://github.com/AVGVSTVS96))
  - `usePiRuntime` + selector hooks (`usePiRuntimeExtras`, `usePiSession`,
    `usePiThreadState`, `usePiHostUiRequests`): thread list, streaming
    text/reasoning/tool output, mid-run steer/follow-up via Pi's native queue
    (mirrored as composer queue items with `clearQueue` restore-to-composer
    support), per-thread model/thinking controls, context usage, and Pi's
    blocking host-UI (approval) surface projected as native
    approvals/interrupts.
  - Browser-safe core: JSON-safe `PiClient` contract (`types`), pure
    snapshot-authoritative reducer (`reducePiThreadState`), pure transcript
    projection, and `PiThreadController` with optimistic echo, frame-coalesced
    stream notifications, and structural sharing of projected messages.
  - `createPiHttpClient` + SSE event source (`createSseDecoder` /
    `openPiEventStream`): the browser transport with snapshot-first reconnect.
  - `@assistant-ui/react-pi/node`: `createPiNodeClient` / `PiThreadSupervisor`,
    the process-singleton node host driving the Pi SDK — live `AgentSession`s for
    execution, read-only session-file snapshots for cold reads, and the
    `ExtensionUIContext` bridge for host-UI requests.

  See `examples/with-pi` for a complete Next.js wiring.
