"use client";

import { useState, useMemo, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarData {
  year: number;
  calendar: {
    weeks: {
      contributionDays: {
        color: string;
        contributionCount: number;
        date: string;
      }[];
    }[];
    totalContributions: number;
  };
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""]; // row 0=Sun..6=Sat

export function GitHubCalendarClient({ calendars }: { calendars: CalendarData[] }) {
  const [activeYear, setActiveYear] = useState(calendars[0]?.year);

  const activeData = calendars.find((c) => c.year === activeYear);
  const calendar = activeData?.calendar;

  const getThemeColor = (color: string) => {
    if (color === "transparent") return "transparent";
    if (color === "#ebedf0" || color === "#161b22" || color === "#0d1117") return "var(--canvas-raise)";
    if (color === "#9be9a8" || color === "#0e4429") return "color-mix(in srgb, var(--green) 30%, var(--canvas))";
    if (color === "#40c463" || color === "#006d32") return "color-mix(in srgb, var(--green) 55%, var(--canvas))";
    if (color === "#30a14e" || color === "#26a641") return "color-mix(in srgb, var(--green) 80%, var(--canvas))";
    if (color === "#216e39" || color === "#39d353") return "var(--green)";
    return color;
  };

  // Compute which week-columns should get a month label above them.
  const monthLabels = useMemo(() => {
    if (!calendar) return [];
    const labels: { weekIndex: number; label: string }[] = [];
    let lastMonth = -1;
    calendar.weeks.forEach((week, i) => {
      const firstRealDay = week.contributionDays.find((d) => d.date);
      if (!firstRealDay) return;
      const month = new Date(firstRealDay.date).getMonth();
      if (month !== lastMonth) {
        labels.push({ weekIndex: i, label: MONTH_NAMES[month] });
        lastMonth = month;
      }
    });
    return labels;
  }, [calendar]);

  if (!calendars || calendars.length === 0) return null;

  return (
    <div className="github-calendar-wrapper">
      <div className="calendar-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="calendar-container"
          >
            <div className="calendar-header">
              <span className="calendar-title">
                {calendar?.totalContributions ?? 0} contributions in {activeYear}
              </span>
            </div>

            <div className="calendar-grid-scroll">
              <div
                className="calendar-grid"
                style={{
                  gridTemplateColumns: `28px repeat(${calendar?.weeks.length || 1}, 11px)`,
                }}
              >
                {/* Month label row */}
                <div className="grid-cell month-spacer" />
                {calendar?.weeks.map((_, i) => {
                  const found = monthLabels.find((m) => m.weekIndex === i);
                  return (
                    <div key={`m-${i}`} className="grid-cell month-label">
                      {found?.label ?? ""}
                    </div>
                  );
                })}

                {/* 7 day rows */}
                {Array.from({ length: 7 }).map((_, dayRow) => (
                  <Fragment key={`row-${dayRow}`}>
                    <div className="grid-cell day-label">{DAY_LABELS[dayRow]}</div>
                    {calendar?.weeks.map((week, weekCol) => {
                      const day = week.contributionDays[dayRow];
                      if (!day) return <div key={`${dayRow}-${weekCol}`} className="grid-cell" />;
                      return (
                        <div
                          key={`${dayRow}-${weekCol}`}
                          className="grid-cell calendar-day"
                          style={{ backgroundColor: getThemeColor(day.color) }}
                          title={
                            day.date ? `${day.contributionCount} contributions on ${day.date}` : undefined
                          }
                        />
                      );
                    })}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="calendar-meta">
              <a
                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                target="_blank"
                rel="noreferrer"
                className="source-link"
              >
                Learn how we count contributions
              </a>
              <div className="legend">
                <span>Less</span>
                <div className="legend-swatch" style={{ background: "var(--canvas-raise)" }} />
                <div className="legend-swatch" style={{ background: "color-mix(in srgb, var(--green) 30%, var(--canvas))" }} />
                <div className="legend-swatch" style={{ background: "color-mix(in srgb, var(--green) 55%, var(--canvas))" }} />
                <div className="legend-swatch" style={{ background: "color-mix(in srgb, var(--green) 80%, var(--canvas))" }} />
                <div className="legend-swatch" style={{ background: "var(--green)" }} />
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Year tabs, right side like GitHub */}
      <div className="calendar-year-tabs">
        {calendars.map((c) => (
          <button
            key={c.year}
            className={`calendar-tab ${activeYear === c.year ? "active" : ""}`}
            onClick={() => setActiveYear(c.year)}
          >
            {c.year}
          </button>
        ))}
      </div>
    </div>
  );
}