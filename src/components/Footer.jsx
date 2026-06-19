export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-[16px] border-t border-outline-variant/50">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
              <span className="font-headline-md text-headline-md font-bold text-primary">NutriPlan</span>
            </div>
            <p className="text-on-surface-variant max-w-xs font-label-md">
              Empowering your health journey with the world's most intelligent nutritional AI.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface">Product</p>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm" href="#features">Features</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm" href="#pricing">Pricing</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface">Company</p>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm" href="#about">About Us</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm" href="#blog">Blog</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface">Support</p>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm" href="#contact">Contact Support</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm" href="#terms">Terms</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface">Connect</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-[48px] mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant/70">© 2024 NutriPlan AI. Premium Health Technology.</p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant/70 hover:text-primary transition-colors font-label-sm" href="#privacy">Privacy Policy</a>
          <a className="text-on-surface-variant/70 hover:text-primary transition-colors font-label-sm" href="#disclaimer">Health Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
