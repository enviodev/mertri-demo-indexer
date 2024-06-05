/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  GnosisSafeContract,
    GnosisSafe_AddedOwnerEntity,
    GnosisSafe_ApproveHashEntity,
    GnosisSafe_ChangedMasterCopyEntity,
    GnosisSafe_ChangedThresholdEntity,
    GnosisSafe_ExecutionFailureEntity,
    GnosisSafe_ExecutionSuccessEntity,
    GnosisSafe_RemovedOwnerEntity,
    GnosisSafe_SignMsgEntity,
  GnosisSafeL2Contract,
    GnosisSafeL2_AddedOwnerEntity,
    GnosisSafeL2_ApproveHashEntity,
    GnosisSafeL2_ChangedFallbackHandlerEntity,
    GnosisSafeL2_ChangedGuardEntity,
    GnosisSafeL2_ChangedThresholdEntity,
    GnosisSafeL2_ExecutionFailureEntity,
    GnosisSafeL2_ExecutionSuccessEntity,
    GnosisSafeL2_RemovedOwnerEntity,
    GnosisSafeL2_SafeMultiSigTransactionEntity,
    GnosisSafeL2_SafeReceivedEntity,
    GnosisSafeL2_SafeSetupEntity,
    GnosisSafeL2_SignMsgEntity,
  HubContract,
    Hub_HubTransferEntity,
    Hub_OrganizationSignupEntity,
    Hub_SignupEntity,
    Hub_TrustEntity,
EventsSummaryEntity
} from "generated";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
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

    GnosisSafeContract.AddedOwner.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.AddedOwner.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_AddedOwnerCount: currentSummaryEntity.gnosisSafe_AddedOwnerCount + BigInt(1),
  };

  const gnosisSafe_AddedOwnerEntity: GnosisSafe_AddedOwnerEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_AddedOwner.set(gnosisSafe_AddedOwnerEntity);
});
    GnosisSafeContract.ApproveHash.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.ApproveHash.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_ApproveHashCount: currentSummaryEntity.gnosisSafe_ApproveHashCount + BigInt(1),
  };

  const gnosisSafe_ApproveHashEntity: GnosisSafe_ApproveHashEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      approvedHash: event.params.approvedHash      ,
      owner: event.params.owner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_ApproveHash.set(gnosisSafe_ApproveHashEntity);
});
    GnosisSafeContract.ChangedMasterCopy.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.ChangedMasterCopy.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_ChangedMasterCopyCount: currentSummaryEntity.gnosisSafe_ChangedMasterCopyCount + BigInt(1),
  };

  const gnosisSafe_ChangedMasterCopyEntity: GnosisSafe_ChangedMasterCopyEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      masterCopy: event.params.masterCopy      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_ChangedMasterCopy.set(gnosisSafe_ChangedMasterCopyEntity);
});
    GnosisSafeContract.ChangedThreshold.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.ChangedThreshold.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_ChangedThresholdCount: currentSummaryEntity.gnosisSafe_ChangedThresholdCount + BigInt(1),
  };

  const gnosisSafe_ChangedThresholdEntity: GnosisSafe_ChangedThresholdEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      threshold: event.params.threshold      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_ChangedThreshold.set(gnosisSafe_ChangedThresholdEntity);
});
    GnosisSafeContract.ExecutionFailure.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.ExecutionFailure.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_ExecutionFailureCount: currentSummaryEntity.gnosisSafe_ExecutionFailureCount + BigInt(1),
  };

  const gnosisSafe_ExecutionFailureEntity: GnosisSafe_ExecutionFailureEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      txHash: event.params.txHash      ,
      payment: event.params.payment      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_ExecutionFailure.set(gnosisSafe_ExecutionFailureEntity);
});
    GnosisSafeContract.ExecutionSuccess.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.ExecutionSuccess.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_ExecutionSuccessCount: currentSummaryEntity.gnosisSafe_ExecutionSuccessCount + BigInt(1),
  };

  const gnosisSafe_ExecutionSuccessEntity: GnosisSafe_ExecutionSuccessEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      txHash: event.params.txHash      ,
      payment: event.params.payment      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_ExecutionSuccess.set(gnosisSafe_ExecutionSuccessEntity);
});
    GnosisSafeContract.RemovedOwner.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.RemovedOwner.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_RemovedOwnerCount: currentSummaryEntity.gnosisSafe_RemovedOwnerCount + BigInt(1),
  };

  const gnosisSafe_RemovedOwnerEntity: GnosisSafe_RemovedOwnerEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_RemovedOwner.set(gnosisSafe_RemovedOwnerEntity);
});
    GnosisSafeContract.SignMsg.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeContract.SignMsg.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafe_SignMsgCount: currentSummaryEntity.gnosisSafe_SignMsgCount + BigInt(1),
  };

  const gnosisSafe_SignMsgEntity: GnosisSafe_SignMsgEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      msgHash: event.params.msgHash      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafe_SignMsg.set(gnosisSafe_SignMsgEntity);
});
    GnosisSafeL2Contract.AddedOwner.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.AddedOwner.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_AddedOwnerCount: currentSummaryEntity.gnosisSafeL2_AddedOwnerCount + BigInt(1),
  };

  const gnosisSafeL2_AddedOwnerEntity: GnosisSafeL2_AddedOwnerEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_AddedOwner.set(gnosisSafeL2_AddedOwnerEntity);
});
    GnosisSafeL2Contract.ApproveHash.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.ApproveHash.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_ApproveHashCount: currentSummaryEntity.gnosisSafeL2_ApproveHashCount + BigInt(1),
  };

  const gnosisSafeL2_ApproveHashEntity: GnosisSafeL2_ApproveHashEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      approvedHash: event.params.approvedHash      ,
      owner: event.params.owner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_ApproveHash.set(gnosisSafeL2_ApproveHashEntity);
});
    GnosisSafeL2Contract.ChangedFallbackHandler.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.ChangedFallbackHandler.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_ChangedFallbackHandlerCount: currentSummaryEntity.gnosisSafeL2_ChangedFallbackHandlerCount + BigInt(1),
  };

  const gnosisSafeL2_ChangedFallbackHandlerEntity: GnosisSafeL2_ChangedFallbackHandlerEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      handler: event.params.handler      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_ChangedFallbackHandler.set(gnosisSafeL2_ChangedFallbackHandlerEntity);
});
    GnosisSafeL2Contract.ChangedGuard.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.ChangedGuard.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_ChangedGuardCount: currentSummaryEntity.gnosisSafeL2_ChangedGuardCount + BigInt(1),
  };

  const gnosisSafeL2_ChangedGuardEntity: GnosisSafeL2_ChangedGuardEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      guard: event.params.guard      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_ChangedGuard.set(gnosisSafeL2_ChangedGuardEntity);
});
    GnosisSafeL2Contract.ChangedThreshold.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.ChangedThreshold.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_ChangedThresholdCount: currentSummaryEntity.gnosisSafeL2_ChangedThresholdCount + BigInt(1),
  };

  const gnosisSafeL2_ChangedThresholdEntity: GnosisSafeL2_ChangedThresholdEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      threshold: event.params.threshold      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_ChangedThreshold.set(gnosisSafeL2_ChangedThresholdEntity);
});
    GnosisSafeL2Contract.ExecutionFailure.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.ExecutionFailure.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_ExecutionFailureCount: currentSummaryEntity.gnosisSafeL2_ExecutionFailureCount + BigInt(1),
  };

  const gnosisSafeL2_ExecutionFailureEntity: GnosisSafeL2_ExecutionFailureEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      txHash: event.params.txHash      ,
      payment: event.params.payment      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_ExecutionFailure.set(gnosisSafeL2_ExecutionFailureEntity);
});
    GnosisSafeL2Contract.ExecutionSuccess.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.ExecutionSuccess.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_ExecutionSuccessCount: currentSummaryEntity.gnosisSafeL2_ExecutionSuccessCount + BigInt(1),
  };

  const gnosisSafeL2_ExecutionSuccessEntity: GnosisSafeL2_ExecutionSuccessEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      txHash: event.params.txHash      ,
      payment: event.params.payment      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_ExecutionSuccess.set(gnosisSafeL2_ExecutionSuccessEntity);
});
    GnosisSafeL2Contract.RemovedOwner.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.RemovedOwner.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_RemovedOwnerCount: currentSummaryEntity.gnosisSafeL2_RemovedOwnerCount + BigInt(1),
  };

  const gnosisSafeL2_RemovedOwnerEntity: GnosisSafeL2_RemovedOwnerEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_RemovedOwner.set(gnosisSafeL2_RemovedOwnerEntity);
});
    GnosisSafeL2Contract.SafeMultiSigTransaction.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.SafeMultiSigTransaction.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_SafeMultiSigTransactionCount: currentSummaryEntity.gnosisSafeL2_SafeMultiSigTransactionCount + BigInt(1),
  };

  const gnosisSafeL2_SafeMultiSigTransactionEntity: GnosisSafeL2_SafeMultiSigTransactionEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      to: event.params.to      ,
      value: event.params.value      ,
      data: event.params.data      ,
      operation: event.params.operation      ,
      safeTxGas: event.params.safeTxGas      ,
      baseGas: event.params.baseGas      ,
      gasPrice: event.params.gasPrice      ,
      gasToken: event.params.gasToken      ,
      refundReceiver: event.params.refundReceiver      ,
      signatures: event.params.signatures      ,
      additionalInfo: event.params.additionalInfo      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_SafeMultiSigTransaction.set(gnosisSafeL2_SafeMultiSigTransactionEntity);
});
    GnosisSafeL2Contract.SafeReceived.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.SafeReceived.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_SafeReceivedCount: currentSummaryEntity.gnosisSafeL2_SafeReceivedCount + BigInt(1),
  };

  const gnosisSafeL2_SafeReceivedEntity: GnosisSafeL2_SafeReceivedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_SafeReceived.set(gnosisSafeL2_SafeReceivedEntity);
});
    GnosisSafeL2Contract.SafeSetup.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.SafeSetup.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_SafeSetupCount: currentSummaryEntity.gnosisSafeL2_SafeSetupCount + BigInt(1),
  };

  const gnosisSafeL2_SafeSetupEntity: GnosisSafeL2_SafeSetupEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      initiator: event.params.initiator      ,
      owners: event.params.owners      ,
      threshold: event.params.threshold      ,
      initializer: event.params.initializer      ,
      fallbackHandler: event.params.fallbackHandler      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_SafeSetup.set(gnosisSafeL2_SafeSetupEntity);
});
    GnosisSafeL2Contract.SignMsg.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    GnosisSafeL2Contract.SignMsg.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    gnosisSafeL2_SignMsgCount: currentSummaryEntity.gnosisSafeL2_SignMsgCount + BigInt(1),
  };

  const gnosisSafeL2_SignMsgEntity: GnosisSafeL2_SignMsgEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      msgHash: event.params.msgHash      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.GnosisSafeL2_SignMsg.set(gnosisSafeL2_SignMsgEntity);
});
    HubContract.HubTransfer.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HubContract.HubTransfer.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hub_HubTransferCount: currentSummaryEntity.hub_HubTransferCount + BigInt(1),
  };

  const hub_HubTransferEntity: Hub_HubTransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      amount: event.params.amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hub_HubTransfer.set(hub_HubTransferEntity);
});
    HubContract.OrganizationSignup.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HubContract.OrganizationSignup.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hub_OrganizationSignupCount: currentSummaryEntity.hub_OrganizationSignupCount + BigInt(1),
  };

  const hub_OrganizationSignupEntity: Hub_OrganizationSignupEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      organization: event.params.organization      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hub_OrganizationSignup.set(hub_OrganizationSignupEntity);
});
    HubContract.Signup.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HubContract.Signup.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hub_SignupCount: currentSummaryEntity.hub_SignupCount + BigInt(1),
  };

  const hub_SignupEntity: Hub_SignupEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      token: event.params.token      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hub_Signup.set(hub_SignupEntity);
});
    HubContract.Trust.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    HubContract.Trust.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    hub_TrustCount: currentSummaryEntity.hub_TrustCount + BigInt(1),
  };

  const hub_TrustEntity: Hub_TrustEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      canSendTo: event.params.canSendTo      ,
      user: event.params.user      ,
      limit: event.params.limit      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Hub_Trust.set(hub_TrustEntity);
});
