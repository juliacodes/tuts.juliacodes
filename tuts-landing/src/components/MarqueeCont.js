import React from "react"
import Marquee from "react-marquee-slider"
import times from "lodash/times"
import { TextAnimate, SlidingText } from "../theming/styles"

const skills = [
  { id: 1, title: "coding environment", type: "strong" },
  { id: 2, title: "github", type: "regular" },
  { id: 3, title: "setup", type: "regular" },
  { id: 4, title: "javascript events", type: "regular" },
  { id: 5, title: "styled-components", type: "strong" },
  { id: 6, title: "react hooks", type: "regular" },
  { id: 7, title: "advanced styling", type: "regular" },
  { id: 8, title: "structuring projects ", type: "regular" },
  { id: 9, title: "building forms ", type: "regular" },
  { id: 10, title: "domains", type: "strong" },
  { id: 11, title: "html semantics", type: "strong" },
  { id: 12, title: "classes & ids", type: "regular" },
  { id: 13, title: "accessibility", type: "regular" },
  { id: 14, title: "design", type: "regular" },
  { id: 15, title: "sass", type: "strong" },
  { id: 16, title: "seo", type: "regular" },
  { id: 17, title: "positioning", type: "regular" },
  { id: 18, title: "building tables", type: "regular" },
  { id: 19, title: "scss", type: "strong" },
  { id: 20, title: "grid", type: "regular" },
  { id: 21, title: "flexbox", type: "strong" },
  { id: 22, title: "media queries", type: "regular" },
  { id: 23, title: "site speed", type: "strong" },
  { id: 24, title: "color theory", type: "regular" },
  { id: 25, title: "string methods", type: "regular" },
  { id: 26, title: "es6+", type: "strong" },
  { id: 27, title: "arrow functions", type: "regular" },
  { id: 28, title: "debugging", type: "regular" },
  { id: 29, title: "portfolio tips", type: "strong" },
  { id: 30, title: "custom domains", type: "regular" },
  { id: 31, title: "functions", type: "regular" },
  { id: 32, title: "api calls", type: "strong" },
  { id: 33, title: "graphql", type: "regular" },
  { id: 34, title: "react hooks", type: "regular" },
  { id: 35, title: "advanced styling", type: "regular" },
  { id: 36, title: "git basics", type: "strong" },
  { id: 37, title: "rebasing & merging", type: "regular" },
  { id: 38, title: "repo hosting", type: "regular" },
  { id: 39, title: "cypress testing", type: "regular" },
  { id: 40, title: "jest testing", type: "regular" },
]

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
