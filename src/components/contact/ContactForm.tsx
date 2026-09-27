"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `Nom : ${form.name}`,
      `E-mail : ${form.email}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      form.subject || "Contact FasoDocs"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
            Nom complet
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-2 h-11 w-full rounded-lg border border-border bg-surface-alt px-3.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-green focus:outline-none"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
            Adresse e-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-2 h-11 w-full rounded-lg border border-border bg-surface-alt px-3.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-green focus:outline-none"
            placeholder="vous@exemple.com"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-ink">
            Objet
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            className="mt-2 h-11 w-full rounded-lg border border-border bg-surface-alt px-3.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-green focus:outline-none"
            placeholder="Question, suggestion, partenariat…"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="mt-2 w-full resize-y rounded-lg border border-border bg-surface-alt px-3.5 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-green focus:outline-none"
            placeholder="Votre question ou suggestion…"
          />
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-subtle">
        Le formulaire ouvre votre client e-mail vers{" "}
        <a href={`mailto:${SITE.email}`} className="text-brand-green underline">
          {SITE.email}
        </a>
        .
      </p>

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Envoyer le message
        </Button>
      </div>
    </form>
  );
}
