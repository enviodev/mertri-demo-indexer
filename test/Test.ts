import assert from "assert";
import { 
  TestHelpers,
  EventsSummaryEntity,
  GnosisSafe_AddedOwnerEntity
} from "generated";
const { MockDb, GnosisSafe, Addresses } = TestHelpers;

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  gnosisSafe_AddedOwnerCount: BigInt(0),
  gnosisSafe_ApproveHashCount: BigInt(0),
  gnosisSafe_ChangedMasterCopyCount: BigInt(0),
  gnosisSafe_ChangedThresholdCount: BigInt(0),
  gnosisSafe_ExecutionFailureCount: BigInt(0),
  gnosisSafe_ExecutionSuccessCount: BigInt(0),
  gnosisSafe_RemovedOwnerCount: BigInt(0),
  gnosisSafe_SignMsgCount: BigInt(0),
  gnosisSafeL2_AddedOwnerCount: BigInt(0),
  gnosisSafeL2_ApproveHashCount: BigInt(0),
  gnosisSafeL2_ChangedFallbackHandlerCount: BigInt(0),
  gnosisSafeL2_ChangedGuardCount: BigInt(0),
  gnosisSafeL2_ChangedThresholdCount: BigInt(0),
  gnosisSafeL2_ExecutionFailureCount: BigInt(0),
  gnosisSafeL2_ExecutionSuccessCount: BigInt(0),
  gnosisSafeL2_RemovedOwnerCount: BigInt(0),
  gnosisSafeL2_SafeMultiSigTransactionCount: BigInt(0),
  gnosisSafeL2_SafeReceivedCount: BigInt(0),
  gnosisSafeL2_SafeSetupCount: BigInt(0),
  gnosisSafeL2_SignMsgCount: BigInt(0),
  hub_HubTransferCount: BigInt(0),
  hub_OrganizationSignupCount: BigInt(0),
  hub_SignupCount: BigInt(0),
  hub_TrustCount: BigInt(0),
};

describe("GnosisSafe contract AddedOwner event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock GnosisSafe contract AddedOwner event
  const mockGnosisSafeAddedOwnerEvent = GnosisSafe.AddedOwner.createMockEvent({
    owner: Addresses.defaultAddress,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = GnosisSafe.AddedOwner.processEvent({
    event: mockGnosisSafeAddedOwnerEvent,
    mockDb: mockDbFinal,
  });

  it("GnosisSafe_AddedOwnerEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualGnosisSafeAddedOwnerEntity = mockDbUpdated.entities.GnosisSafe_AddedOwner.get(
      mockGnosisSafeAddedOwnerEvent.transactionHash +
        mockGnosisSafeAddedOwnerEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedGnosisSafeAddedOwnerEntity: GnosisSafe_AddedOwnerEntity = {
      id:
        mockGnosisSafeAddedOwnerEvent.transactionHash +
        mockGnosisSafeAddedOwnerEvent.logIndex.toString(),
      owner: mockGnosisSafeAddedOwnerEvent.params.owner,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualGnosisSafeAddedOwnerEntity, expectedGnosisSafeAddedOwnerEntity, "Actual GnosisSafeAddedOwnerEntity should be the same as the expectedGnosisSafeAddedOwnerEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      gnosisSafe_AddedOwnerCount: MOCK_EVENTS_SUMMARY_ENTITY.gnosisSafe_AddedOwnerCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual GnosisSafeAddedOwnerEntity should be the same as the expectedGnosisSafeAddedOwnerEntity");
  });
});
