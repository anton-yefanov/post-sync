import {
  EventEntity,
  EventName,
  SubscriptionActivatedEvent,
  SubscriptionUpdatedEvent,
} from "@paddle/paddle-node-sdk";
import { connectToDatabase } from "@/lib/database/connectToDatabase";
import { User } from "@/models/user/User";

export class ProcessWebhook {
  async processEvent(eventData: EventEntity) {
    switch (eventData.eventType) {
      case EventName.SubscriptionActivated:
      case EventName.SubscriptionUpdated:
        await this.updateSubscriptionData(eventData);
        break;
    }
  }

  private async updateSubscriptionData(
    eventData: SubscriptionActivatedEvent | SubscriptionUpdatedEvent,
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const userId = eventData.data.customData!.userId;
    const { id, status, customerId, items } = eventData.data;
    const item = items[0];

    await connectToDatabase();

    await User.findByIdAndUpdate(
      userId,
      {
        subscription: {
          id,
          status,
          customerId,
          productId: item.product?.id,
          priceId: item.price?.id,
        },
      },
      { new: true, runValidators: true },
    );
  }
}
