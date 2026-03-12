import { useState } from 'react'
import './SingleDatePicker.css'
import { DatePickerHeader } from '../DatePickerHeader/DatePickerHeader'
import { DatePickerDayLabel } from '../DatePickerDayLabel/DatePickerDayLabel'
import { DatePickerDateButton } from '../DatePickerDateButton/DatePickerDateButton'
import { DatePickerYearMonthButton } from '../DatePickerYearMonthButton/DatePickerYearMonthButton'

// ── Calendar utilities ────────────────────────────────────────

type ViewMode = 'day' | 'year' | 'month'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const YEARS_PER_PAGE = 12

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay() // 0 = Sunday
}

function buildCalendarGrid(year: number, month: number): (number | null)[][] {
  const firstDay  = getFirstDayOfWeek(year, month)
  const lastDay   = getDaysInMonth(year, month)
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= lastDay; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  const rows: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
  return rows
}

// ── Component ─────────────────────────────────────────────────

export type SingleDatePickerProps = {
  /** Controlled selected date */
  value?: Date | null
  /** Uncontrolled default */
  defaultValue?: Date | null
  onChange?: (date: Date) => void
  /** Overrides which date is highlighted as "today" */
  today?: Date
}

export function SingleDatePicker({
  value,
  defaultValue = null,
  onChange,
  today = new Date(),
}: SingleDatePickerProps) {
  const isControlled = value !== undefined
  const [internalDate, setInternalDate] = useState<Date | null>(defaultValue)
  const selectedDate = isControlled ? (value ?? null) : internalDate

  const initYear  = selectedDate?.getFullYear() ?? today.getFullYear()
  const initMonth = selectedDate?.getMonth()    ?? today.getMonth()

  const [displayYear,    setDisplayYear]    = useState(initYear)
  const [displayMonth,   setDisplayMonth]   = useState(initMonth)
  const [viewMode,       setViewMode]       = useState<ViewMode>('day')
  const [yearPageStart,  setYearPageStart]  = useState(initYear - 6)

  // ── Header label ─────────────────────────────────────────────

  const headerLabel =
    viewMode === 'day'   ? `${MONTH_NAMES[displayMonth]} ${displayYear}` :
    viewMode === 'month' ? String(displayYear) :
    `${yearPageStart} – ${yearPageStart + YEARS_PER_PAGE - 1}`

  // ── Navigation ───────────────────────────────────────────────

  const handleHeaderClick = () => {
    if (viewMode === 'day')   setViewMode('year')
    else if (viewMode === 'year') setViewMode('month')
    else setViewMode('day')
  }

  const handlePrev = () => {
    if (viewMode === 'day') {
      if (displayMonth === 0) { setDisplayMonth(11); setDisplayYear(y => y - 1) }
      else setDisplayMonth(m => m - 1)
    } else if (viewMode === 'year') {
      setYearPageStart(s => s - YEARS_PER_PAGE)
    } else {
      setDisplayYear(y => y - 1)
    }
  }

  const handleNext = () => {
    if (viewMode === 'day') {
      if (displayMonth === 11) { setDisplayMonth(0); setDisplayYear(y => y + 1) }
      else setDisplayMonth(m => m + 1)
    } else if (viewMode === 'year') {
      setYearPageStart(s => s + YEARS_PER_PAGE)
    } else {
      setDisplayYear(y => y + 1)
    }
  }

  // ── Selection handlers ────────────────────────────────────────

  const handleDayClick = (day: number) => {
    const newDate = new Date(displayYear, displayMonth, day)
    if (!isControlled) setInternalDate(newDate)
    onChange?.(newDate)
  }

  const handleYearSelect = (year: number) => {
    setDisplayYear(year)
    setViewMode('month')
  }

  const handleMonthSelect = (monthIndex: number) => {
    setDisplayMonth(monthIndex)
    setViewMode('day')
  }

  // ── Day type helpers ──────────────────────────────────────────

  const isToday = (day: number) =>
    day === today.getDate() &&
    displayMonth === today.getMonth() &&
    displayYear  === today.getFullYear()

  const isSelected = (day: number) =>
    selectedDate != null &&
    day === selectedDate.getDate() &&
    displayMonth === selectedDate.getMonth() &&
    displayYear  === selectedDate.getFullYear()

  // ── Grid data ─────────────────────────────────────────────────

  const calendarRows = buildCalendarGrid(displayYear, displayMonth)

  const yearRows: number[][] = []
  const years = Array.from({ length: YEARS_PER_PAGE }, (_, i) => yearPageStart + i)
  for (let i = 0; i < years.length; i += 3) yearRows.push(years.slice(i, i + 3))

  const monthRows: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]

  // ── Render ────────────────────────────────────────────────────

  return (
    <div className="itss-dp-single">
      <DatePickerHeader
        label={headerLabel}
        open={viewMode !== 'day'}
        onDropdownClick={handleHeaderClick}
        onPrevClick={handlePrev}
        onNextClick={handleNext}
      />

      {viewMode === 'day' && (
        <div className="itss-dp-single__calendar">
          <div className="itss-dp-single__day-labels">
            {DAY_LABELS.map(d => (
              <DatePickerDayLabel key={d} label={d} />
            ))}
          </div>
          <div className="itss-dp-single__dates">
            {calendarRows.map((row, ri) => (
              <div key={ri} className="itss-dp-single__week">
                {row.map((day, ci) => (
                  <DatePickerDateButton
                    key={ci}
                    day={day ?? undefined}
                    type={
                      day == null     ? 'null'     :
                      isSelected(day) ? 'selected' :
                      isToday(day)    ? 'today'    :
                      'default'
                    }
                    onClick={day != null ? () => handleDayClick(day) : undefined}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'year' && (
        <div className="itss-dp-single__picker-grid">
          {yearRows.map((row, ri) => (
            <div key={ri} className="itss-dp-single__picker-row">
              {row.map(year => (
                <DatePickerYearMonthButton
                  key={year}
                  label={String(year)}
                  selected={year === displayYear}
                  onClick={() => handleYearSelect(year)}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      {viewMode === 'month' && (
        <div className="itss-dp-single__picker-grid">
          {monthRows.map((row, ri) => (
            <div key={ri} className="itss-dp-single__picker-row">
              {row.map(mi => (
                <DatePickerYearMonthButton
                  key={mi}
                  label={SHORT_MONTH_NAMES[mi]}
                  selected={mi === displayMonth}
                  onClick={() => handleMonthSelect(mi)}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
