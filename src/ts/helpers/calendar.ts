import type { CalendarMonth } from "$types/shared/calendar";
import dayjs from "dayjs";
import { BaseHelper } from ".";

export class CalendarHelper extends BaseHelper {
  static override FriendlyName: string = "Calendar helper";

  public static getCalendarMonth(date = dayjs().format("YYYY-MM-DD")): CalendarMonth {
    const result: CalendarMonth = {
      prepended: [],
      current: [],
      appended: [],
    };

    const today = dayjs().format("YYYY-MM-DD");
    const lastMonth = dayjs(date).subtract(1, "month").format("YYYY-MM");
    const thisMonth = dayjs(date).format("YYYY-MM");
    const nextMonth = dayjs(date).add(1, "month").format("YYYY-MM");
    const daysInCurrent = dayjs(date).daysInMonth();
    const firstDayOfCurrent = dayjs(date).format(`${thisMonth}-01`);
    const daysInPast = dayjs(date).subtract(1, "month").daysInMonth();
    const firstWeekdayCurrent = dayjs(firstDayOfCurrent).day();
    const prepended = firstWeekdayCurrent === 0 ? 0 : firstWeekdayCurrent;
    const appended = 42 - prepended - daysInCurrent;

    if (prepended > 0) {
      for (let i = prepended - 1; i >= 0; i--) {
        const dayOfMonth = daysInPast - i;
        const fullDate = `${lastMonth}-${String(dayOfMonth).padStart(2, "0")}`;
        const dayOfWeek = dayjs(fullDate).day();

        result.prepended.push({
          caption: CalendarHelper.shortWeekDays[dayOfWeek],
          dayOfMonth,
          fullDate,
          isToday: fullDate === today,
        });
      }
    }

    for (let i = 0; i < daysInCurrent; i++) {
      const dayOfMonth = i + 1;
      const fullDate = `${thisMonth}-${String(dayOfMonth).padStart(2, "0")}`;
      const dayOfWeek = dayjs(fullDate).day();

      result.current.push({
        caption: CalendarHelper.shortWeekDays[dayOfWeek],
        dayOfMonth,
        fullDate,
        isToday: fullDate === today,
      });
    }

    for (let i = 0; i < appended; i++) {
      const dayOfMonth = i + 1;
      const fullDate = `${nextMonth}-${String(dayOfMonth).padStart(2, "0")}`;
      const dayOfWeek = dayjs(fullDate).day();

      result.appended.push({
        caption: CalendarHelper.shortWeekDays[dayOfWeek],
        dayOfMonth,
        fullDate,
        isToday: fullDate === today,
      });
    }

    return result;
  }

  public static longWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  public static shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
}
