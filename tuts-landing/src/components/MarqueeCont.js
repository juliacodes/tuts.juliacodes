import React from "react"
import Marquee from "react-marquee-slider"
import times from "lodash/times"
import { TextAnimate, SlidingText } from "../theming/styles"
import skills from "../storage/skills"

const MarqueeCont = () => {
  return (
    <TextAnimate>
      <div style={{ marginTop: 30 }}>
        <Marquee style={{ height: 120 }} velocity={35}>
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
      <div style={{ marginTop: 30 }}>
        <Marquee direction="rlt" style={{ height: 120 }} velocity={35}>
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
      <div style={{ marginTop: 30 }}>
        <Marquee style={{ height: 120 }} velocity={35}>
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
