export interface CalendarMonth {
  prepended: CalendarDay[];
  current: CalendarDay[];
  appended: CalendarDay[];
}

export interface CalendarDay {
  fullDate: string;
  caption: string;
  dayOfMonth: number;
  isToday?: boolean;
}
