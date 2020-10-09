import React from "react"
import Marquee from "react-marquee-slider"
import { TextAnimate, SlidingText } from "../theming/styles"
import skills from "../storage/skills"
import { isMobile } from "react-device-detect"

const MarqueeCont = props => {
  return (
    <TextAnimate>
      <div style={{ marginTop: "1.4%" }}>
        <Marquee
          style={{ height: 120 }}
          velocity={props.viewing && !isMobile ? 35 : isMobile ? 5 : 0}
        >
          {skills.slice(20, 40).map(skill => (
            <SlidingText>
              <p
                className={skill.type === "strong" ? "heavy" : null}
                key={skill.id}
              >
                {skill.title}
              </p>
            </SlidingText>
          ))}
        </Marquee>
      </div>
      <div style={{ marginTop: "1.4%" }}>
        <Marquee
          direction="rlt"
          style={{ height: 120 }}
          velocity={props.viewing && !isMobile ? 35 : isMobile ? 5 : 0}
        >
          {skills
            .slice(10, 30)
            .reverse()
            .map(skill => (
              <SlidingText>
                <p
                  className={skill.type === "strong" ? "heavy" : null}
                  key={skill.id}
                >
                  {skill.title}
                </p>
              </SlidingText>
            ))}
        </Marquee>
      </div>
      <div style={{ marginTop: "1.4%" }}>
        <Marquee
          style={{ height: 120 }}
          velocity={props.viewing && !isMobile ? 35 : isMobile ? 5 : 0}
        >
          {skills.slice(0, 20).map(skill => (
            <SlidingText>
              <p
                className={skill.type === "strong" ? "heavy" : null}
                key={skill.id}
              >
                {skill.title}
              </p>
            </SlidingText>
          ))}
        </Marquee>
      </div>
    </TextAnimate>
  )
}

export default MarqueeCont
