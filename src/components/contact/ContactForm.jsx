import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { services } from "../../data/services";
import { waLink } from "../../data/business";

const TIME_SLOTS = [
  "Morning (11 AM \u2013 2 PM)",
  "Afternoon (2 PM \u2013 5 PM)",
  "Evening (5 PM \u2013 9 PM)",
];

// Blocks past dates in the date picker -- recalculated on each render so it
// never goes stale if the form stays open across midnight.
const todayISO = new Date().toISOString().split("T")[0];

const initialState = {
  name: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

function buildWaMessage(form) {
  const lines = [
    "Assalam-o-Alaikum Casa De Cars! I'd like to book an appointment.",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
  ];
  if (form.vehicle) lines.push(`Vehicle: ${form.vehicle}`);
  if (form.service) lines.push(`Service: ${form.service}`);
  if (form.date) lines.push(`Preferred date: ${form.date}`);
  if (form.time) lines.push(`Preferred time: ${form.time}`);
  if (form.notes) lines.push(`Notes: ${form.notes}`);
  lines.push("Please confirm my slot. Thank you!");
  return lines.join("\n");
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildWaMessage(form);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className="input"
          />
        </Field>
        <Field label="Phone / WhatsApp" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="03XX XXXXXXX"
            className="input"
          />
        </Field>
      </div>

      <Field label="Vehicle">
        <input
          type="text"
          value={form.vehicle}
          onChange={update("vehicle")}
          placeholder="e.g. Honda Civic RS, black"
          className="input"
        />
      </Field>

      <Field label="Service">
        <select value={form.service} onChange={update("service")} className="input">
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure">Not sure {"\u2014"} advise me</option>
        </select>
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred date">
          <input
            type="date"
            value={form.date}
            onChange={update("date")}
            min={todayISO}
            style={{ colorScheme: "dark" }}
            className="input"
          />
        </Field>
        <Field label="Preferred time">
          <select value={form.time} onChange={update("time")} className="input">
            <option value="">Select a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Anything we should know? (optional)">
        <textarea
          value={form.notes}
          onChange={update("notes")}
          rows={4}
          placeholder="Tell us more about your car or what you need"
          className="input resize-none"
        />
      </Field>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber text-onAmber px-6 py-3.5 text-sm font-semibold hover:bg-amber-light transition-colors"
      >
        Send via WhatsApp
        <MessageCircle className="w-4 h-4" strokeWidth={2.25} />
      </button>

      <p className="text-xs text-muted text-center">
        This opens WhatsApp with your details already filled in {"\u2014"} just hit send.
      </p>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      {children}
    </label>
  );
}
