import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "../../data/services";
import Reveal from "../ui/Reveal";

const TIME_SLOTS = [
  "Morning (10 AM – 1 PM)",
  "Afternoon (1 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
];

const initialState = {
  name: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: replace this mock delay with a real request to your backend,
    // e.g. `await fetch("/api/appointments", { method: "POST", body: ... })`
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
  };

  if (status === "success") {
    return (
      <Reveal className="rounded-2xl border border-line bg-panel p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-amber mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="text-xl tracking-wide mb-2">Request received</h3>
        <p className="text-muted max-w-sm mx-auto leading-relaxed">
          Thanks, {form.name || "there"}. We confirm every slot personally —
          usually within the hour during working time.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-6 text-sm text-amber hover:text-amber-light transition-colors"
        >
          Submit another request
        </button>
      </Reveal>
    );
  }

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
          <option value="not-sure">Not sure — advise me</option>
        </select>
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred date">
          <input
            type="date"
            value={form.date}
            onChange={update("date")}
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
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber text-onAmber px-6 py-3.5 text-sm font-semibold hover:bg-amber-light transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request my appointment"}
        {status !== "submitting" && <Send className="w-4 h-4" strokeWidth={2.25} />}
      </button>

      <p className="text-xs text-muted text-center">
        We confirm every slot personally — usually within the hour during
        working time.
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
