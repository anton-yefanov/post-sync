import { CheckoutEventsTimePeriod } from "@paddle/paddle-js";

const BillingCycleMap = {
  day: "daily",
  week: "weekly",
  month: "monthly",
  year: "yearly",
};

export function formatBillingCycle(
  interval: CheckoutEventsTimePeriod["interval"],
) {
  return BillingCycleMap[interval];
}
