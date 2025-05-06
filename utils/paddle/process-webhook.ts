import {
  EventEntity,
  EventName,
  SubscriptionActivatedEvent,
  SubscriptionUpdatedEvent,
  SubscriptionCanceledEvent,
} from "@paddle/paddle-node-sdk";

export class ProcessWebhook {
  async processEvent(eventData: EventEntity) {
    switch (eventData.eventType) {
      case EventName.SubscriptionActivated:
      case EventName.SubscriptionUpdated:
        await this.updateSubscriptionData(eventData);
        break;
      case EventName.SubscriptionCanceled:
        await this.handleCancelSubscription(eventData);
    }
  }

  private async updateSubscriptionData(
    eventData: SubscriptionActivatedEvent | SubscriptionUpdatedEvent,
  ) {
    console.log(eventData);
  }

  private async handleCancelSubscription(eventData: SubscriptionCanceledEvent) {
    console.log(eventData);
  }
}
