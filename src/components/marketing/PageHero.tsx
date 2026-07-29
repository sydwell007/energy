import type { ReactNode } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  chips,
  stats,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
  chips?: readonly string[];
  stats?: ReactNode;
}) {
  return (
    <header className="innerHero">
      <div className="container">
        <div className="innerHeroCard">
          <div className="heroOverlay" aria-hidden="true" />
          <div className="innerHeroBlob" aria-hidden="true" />
          <div className="pageHeroGrid">
            <div className="heroInner">
              <span className="badge">
                <Sparkles size={14} aria-hidden="true" />
                {eyebrow}
              </span>
              <h1 className="h1 innerH1">{title}</h1>
              <p className="heroSub">{intro}</p>

              {actions ? (
                <div className="heroActions" role="group" aria-label="Page actions">
                  {actions}
                </div>
              ) : null}

              {chips && chips.length > 0 ? (
                <div className="chipRow" aria-label="Highlights">
                  {chips.map((chip) => (
                    <span className="chip" key={chip}>
                      <CheckCircle2 size={14} aria-hidden="true" />
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="pageHeroVisual" aria-hidden="true">
              <span className="visualOrbit visualOrbitOne" />
              <span className="visualOrbit visualOrbitTwo" />
              <span className="visualCore">CE</span>
              <span className="visualLabel visualLabelOne">Charge</span>
              <span className="visualLabel visualLabelTwo">Store</span>
              <span className="visualLabel visualLabelThree">Operate</span>
            </div>
          </div>

          {stats ? <div className="heroStats">{stats}</div> : null}
        </div>
      </div>
    </header>
  );
}
