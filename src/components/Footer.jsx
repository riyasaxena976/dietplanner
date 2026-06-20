export default function Footer() {
  return (
    <footer className="w-full py-[16px] bg-surface-container-lowest border-t border-outline-variant/50 mt-20">
      <div className="max-w-[1280px] mx-auto px-[48px] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline-md text-headline-md font-bold text-primary">NutriPlan</span>
          <p className="font-label-sm text-label-sm text-on-surface-variant/70">© 2024 NutriPlan AI. Premium Health Technology.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary transition-colors" href="#privacy">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary transition-colors" href="#terms">
            Terms of Service
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary transition-colors" href="#contact">
            Contact Support
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary transition-colors" href="#disclaimer">
            Health Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
