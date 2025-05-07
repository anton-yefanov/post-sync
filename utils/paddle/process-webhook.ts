import {
  EventEntity,
  EventName,
  SubscriptionActivatedEvent,
  SubscriptionUpdatedEvent,
  SubscriptionTrialingEvent,
} from "@paddle/paddle-node-sdk";
import { connectToDatabase } from "@/lib/database/connectToDatabase";

export class ProcessWebhook {
  async processEvent(eventData: EventEntity) {
    switch (eventData.eventType) {
      case EventName.SubscriptionActivated:
      case EventName.SubscriptionUpdated:
      case EventName.SubscriptionTrialing:
        await this.updateSubscriptionData(eventData);
        break;
    }
  }

  private async updateSubscriptionData(
    eventData:
      | SubscriptionActivatedEvent
      | SubscriptionUpdatedEvent
      | SubscriptionTrialingEvent,
  ) {
    await connectToDatabase();
    console.log(eventData.data);
  }
}
