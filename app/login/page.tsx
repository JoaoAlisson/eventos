"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Preencha email e senha para continuar.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setError("Autenticação ainda não foi conectada. Próxima fase do projeto.");
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-neutral-100">
      {/* Aurora mesh gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/3 -left-1/4 h-[120vh] w-[120vh] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.55), rgba(245,158,11,0) 60%)",
            animation: "var(--animate-aurora)",
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 h-[110vh] w-[110vh] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.55), rgba(220,38,38,0) 60%)",
            animation: "var(--animate-aurora)",
            animationDelay: "-7s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.4), rgba(139,92,246,0) 60%)",
            animation: "var(--animate-aurora)",
            animationDelay: "-3.5s",
          }}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
        {/* === Brand side === */}
        <aside className="relative hidden overflow-hidden lg:flex lg:flex-col">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt=""
              fill
              priority
              unoptimized
              sizes="60vw"
              className="object-cover"
            />
            {/* Layered overlays for legibility + brand tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/85 via-neutral-950/70 to-neutral-950/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 38%, rgba(245,158,11,0.18), transparent 55%)",
              }}
            />
            {/* Right-edge fade to merge with form side */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent" />
          </div>

          <div className="relative flex h-full flex-col justify-between p-10 xl:p-14">
            {/* Top-left: brand identifier (compact) */}
            <div
              className="inline-flex items-center gap-2.5"
              style={{
                animation: "var(--animate-fade-up)",
                animationDelay: "0.05s",
                opacity: 0,
              }}
            >
              <div className="h-7 w-7 overflow-hidden rounded-lg ring-1 ring-amber-500/40">
                <Image
                  src="/logo.jpg"
                  alt="Camarote Shows"
                  width={150}
                  height={150}
                  priority
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                Painel de gestão
              </div>
            </div>

            {/* Center: HERO logo */}
            <div className="flex flex-1 flex-col items-center justify-center -mt-8">
              <div
                className="relative flex items-center justify-center"
                style={{
                  animation: "var(--animate-fade-up)",
                  animationDelay: "0.15s",
                  opacity: 0,
                }}
              >
                {/* Outer rotating ring with dashed pattern */}
                <div
                  className="absolute h-[280px] w-[280px] rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(245,158,11,0.4) 0deg, transparent 60deg, rgba(220,38,38,0.35) 180deg, transparent 240deg, rgba(245,158,11,0.4) 360deg)",
                    mask: "radial-gradient(circle, transparent 138px, black 139px, black 140px, transparent 141px)",
                    WebkitMask:
                      "radial-gradient(circle, transparent 138px, black 139px, black 140px, transparent 141px)",
                    animation: "var(--animate-spin-slow)",
                  }}
                />

                {/* Inner rotating ring (counter direction) */}
                <div
                  className="absolute h-[230px] w-[230px] rounded-full border border-amber-500/15"
                  style={{ animation: "var(--animate-spin-reverse)" }}
                >
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
                  <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.9)]" />
                </div>

                {/* Light beams emanating */}
                <div
                  aria-hidden
                  className="absolute h-[420px] w-[420px]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, rgba(245,158,11,0.15) 8deg, transparent 16deg, transparent 82deg, rgba(245,158,11,0.12) 90deg, transparent 98deg, transparent 172deg, rgba(220,38,38,0.13) 180deg, transparent 188deg, transparent 262deg, rgba(245,158,11,0.12) 270deg, transparent 278deg)",
                    maskImage:
                      "radial-gradient(circle, transparent 140px, black 145px, transparent 210px)",
                    WebkitMaskImage:
                      "radial-gradient(circle, transparent 140px, black 145px, transparent 210px)",
                  }}
                />

                {/* Soft halo blur */}
                <div className="absolute h-44 w-44 rounded-full bg-amber-500/30 blur-3xl" />
                <div className="absolute h-32 w-32 rounded-full bg-red-500/25 blur-2xl" />

                {/* The logo itself */}
                <div
                  className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-amber-400/40 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.55)]"
                  style={{
                    animation: "var(--animate-breath)",
                  }}
                >
                  <div className="absolute inset-0 z-10 rounded-full ring-1 ring-inset ring-white/10" />
                  <Image
                    src="/logo.jpg"
                    alt="Camarote Shows"
                    width={300}
                    height={300}
                    priority
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Tagline below logo */}
              <div
                className="mt-10 max-w-md space-y-5 text-center"
                style={{
                  animation: "var(--animate-fade-up)",
                  animationDelay: "0.28s",
                  opacity: 0,
                }}
              >
                <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-tight">
                  Do <span className="text-gradient-gold">primeiro lote</span>
                  <br />
                  à{" "}
                  <span className="italic font-light text-neutral-300">
                    última mesa.
                  </span>
                </h1>

                <p className="text-[14px] leading-relaxed text-neutral-400">
                  Venda de ingressos e camarotes, controle de promoters e
                  check-in no dia do evento — tudo num só lugar.
                </p>

                <ul className="flex flex-wrap justify-center gap-2 pt-1">
                  {["PIX & cartão", "Promoter rastreado", "Check-in QR"].map(
                    (item) => (
                      <li
                        key={item}
                        className="rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1 text-[11.5px] font-medium text-amber-200/90 backdrop-blur"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Bottom: stats card */}
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-4 backdrop-blur-md"
              style={{
                animation: "var(--animate-fade-up)",
                animationDelay: "0.4s",
                opacity: 0,
              }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
              <div className="relative grid grid-cols-3 gap-4">
                <Stat label="Eventos" value="100%" sub="online" />
                <Stat label="Setup" value="3-4" sub="semanas" />
                <Stat label="Custo inicial" value="R$ 0" sub="infra free tier" />
              </div>
            </div>
          </div>
        </aside>

        {/* === Form side === */}
        <section className="relative flex items-center justify-center px-5 py-10 sm:px-8">
          {/* Mobile-only brand */}
          <div className="absolute left-0 right-0 top-6 flex items-center justify-center gap-2.5 lg:hidden">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-amber-500/30">
              <Image
                src="/logo.jpg"
                alt="Camarote Shows"
                width={150}
                height={150}
                priority
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              Camarote <span className="text-gradient-gold">Shows</span>
            </span>
          </div>

          <div
            className="relative w-full max-w-sm"
            style={{
              animation: "var(--animate-fade-up)",
              animationDelay: "0.1s",
              opacity: 0,
            }}
          >
            {/* Glass card */}
            <div className="relative">
              <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02]" />
              <div className="relative rounded-[1.7rem] border border-white/10 bg-neutral-900/60 p-7 sm:p-8 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                <div className="mb-7">
                  <h2 className="text-[1.65rem] font-semibold tracking-tight">
                    Bem-vindo
                  </h2>
                  <p className="mt-1.5 text-sm text-neutral-400">
                    Entre com sua conta para acessar o painel.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <FieldEmail
                    value={email}
                    onChange={setEmail}
                    focused={emailFocused}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />

                  <FieldPassword
                    value={password}
                    onChange={setPassword}
                    show={showPassword}
                    onToggleShow={() => setShowPassword((v) => !v)}
                    focused={passwordFocused}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    onForgot={() =>
                      setError(
                        "Recuperação de senha disponível na próxima fase."
                      )
                    }
                  />

                  <label className="flex items-center gap-2 pt-1 text-[13px] text-neutral-400 select-none cursor-pointer group">
                    <span className="relative">
                      <input
                        type="checkbox"
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-neutral-700 bg-neutral-950 transition checked:border-amber-500 checked:bg-amber-500"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 text-neutral-950 opacity-0 peer-checked:opacity-100"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="group-hover:text-neutral-200 transition-colors">
                      Manter sessão por 30 dias
                    </span>
                  </label>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-3.5 py-3 text-[13px] text-red-300"
                      style={{ animation: "var(--animate-fade-in)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-px h-4 w-4 shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary group relative w-full rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-red-500 px-4 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                            />
                          </svg>
                          Autenticando…
                        </>
                      ) : (
                        <>
                          Entrar
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                    <span className="text-[11px] uppercase tracking-widest text-neutral-500">
                      ou
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setError("Login com Google disponível na próxima fase.")
                    }
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-700/80 bg-neutral-900/60 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-neutral-600 hover:bg-neutral-800/80"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continuar com Google
                  </button>
                </form>
              </div>
            </div>

            <p className="mt-6 text-center text-[12px] text-neutral-500">
              Acesso para equipe interna, promoters e portaria.
              <br />
              <span className="text-neutral-600">
                © {new Date().getFullYear()} Camarote Eventos
              </span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ============ subcomponents ============ */

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div>
      <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </div>
      <div className="mt-1 text-xl font-semibold tracking-tight text-neutral-100">
        {value}
      </div>
      <div className="text-[11px] text-neutral-500">{sub}</div>
    </div>
  );
}

function FieldEmail({
  value,
  onChange,
  focused,
  onFocus,
  onBlur,
}: {
  value: string;
  onChange: (v: string) => void;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div>
      <label
        htmlFor="email"
        className="mb-1.5 block text-[12.5px] font-medium text-neutral-300"
      >
        Email
      </label>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
            focused ? "text-amber-400" : "text-neutral-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </span>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="seu@email.com"
          className="input-glow w-full rounded-xl border border-neutral-700/80 bg-neutral-950/60 py-2.5 pl-10 pr-3.5 text-[14px] placeholder:text-neutral-600 focus:border-amber-500/50 focus:outline-none transition"
        />
      </div>
    </div>
  );
}

function FieldPassword({
  value,
  onChange,
  show,
  onToggleShow,
  focused,
  onFocus,
  onBlur,
  onForgot,
}: {
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggleShow: () => void;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onForgot: () => void;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label
          htmlFor="password"
          className="text-[12.5px] font-medium text-neutral-300"
        >
          Senha
        </label>
        <button
          type="button"
          onClick={onForgot}
          className="text-[11.5px] font-medium text-neutral-400 transition hover:text-amber-400"
        >
          Esqueci minha senha
        </button>
      </div>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
            focused ? "text-amber-400" : "text-neutral-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </span>
        <input
          id="password"
          name="password"
          type={show ? "text" : "password"}
          autoComplete="current-password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="••••••••"
          className="input-glow w-full rounded-xl border border-neutral-700/80 bg-neutral-950/60 py-2.5 pl-10 pr-11 text-[14px] placeholder:text-neutral-600 focus:border-amber-500/50 focus:outline-none transition"
        />
        <button
          type="button"
          onClick={onToggleShow}
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-neutral-500 transition hover:text-neutral-200"
        >
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
              <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
