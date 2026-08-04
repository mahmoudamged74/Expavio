import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { HiBars3, HiMoon, HiSun, HiChevronDown } from "react-icons/hi2";
import { useTheme } from "@/app/providers/ThemeProvider";
import { switchLanguage } from "@/app/providers/LanguageProvider";
import { Button } from "@/components/ui/Button/Button";
import { MegaMenu } from "@/components/layout/MegaMenu/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

const MEGA_CLOSE_DELAY = 220;

export function Header() {
  const { t, i18n } = useTranslation("common");
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const isAr = i18n.language?.startsWith("ar");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(
      () => setMegaOpen(false),
      MEGA_CLOSE_DELAY,
    );
  };

  const closeMegaNow = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaOpen(false);
  };

  const navClass = ({ isActive }) =>
    clsx(styles.navLink, isActive && styles.navLinkActive);

  const servicesNavClass = ({ isActive }) =>
    clsx(styles.navLink, (isActive || megaOpen) && styles.navLinkActive);

  return (
    <header
      className={clsx(
        styles.header,
        scrolled && styles.scrolled,
        megaOpen && styles.megaOpen,
      )}
    >
      <div className={clsx("container", styles.inner)}>
        <Link to="/" className={styles.logo} aria-label={t("brand")}>
          <img
            src="/assets/expavio-logo.webp"
            alt=""
            className={styles.logoImg}
            width={160}
            height={48}
            decoding="async"
            fetchPriority="high"
          />
        </Link>

        <nav className={styles.nav} aria-label={t("footer.quickLinks")}>
          <NavLink to="/" end className={navClass}>
            <span className={styles.navText}>{t("nav.home")}</span>
          </NavLink>
          <NavLink to="/about" className={navClass}>
            <span className={styles.navText}>{t("nav.about")}</span>
          </NavLink>

          <div
            className={styles.servicesItem}
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
            onFocus={openMega}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                scheduleCloseMega();
            }}
          >
            <NavLink
              to="/services"
              className={servicesNavClass}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              <span className={styles.navText}>{t("nav.services")}</span>
              <HiChevronDown
                className={clsx(styles.chevron, megaOpen && styles.chevronOpen)}
                aria-hidden="true"
              />
            </NavLink>
            <MegaMenu
              open={megaOpen}
              onClose={closeMegaNow}
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
            />
          </div>

          <NavLink to="/foreign-investor" className={navClass}>
            <span className={styles.navText}>{t("nav.foreignInvestor")}</span>
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            <span className={styles.navText}>{t("nav.contact")}</span>
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={t("theme.toggle")}
          >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>

          <div
            className={styles.langSwitch}
            role="group"
            aria-label={t("lang.toggle")}
          >
            <button
              type="button"
              className={clsx(styles.langOption, isAr && styles.langActive)}
              onClick={() => switchLanguage(i18n, "ar")}
              aria-pressed={isAr}
            >
              AR
            </button>
            <span className={styles.langDivider} aria-hidden="true" />
            <button
              type="button"
              className={clsx(styles.langOption, !isAr && styles.langActive)}
              onClick={() => switchLanguage(i18n, "en")}
              aria-pressed={!isAr}
            >
              EN
            </button>
          </div>

          <Button to="/consultation" size="sm" className={styles.cta}>
            {t("actions.bookConsultation")}
          </Button>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <HiBars3 />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
