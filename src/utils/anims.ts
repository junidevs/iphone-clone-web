import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = gsap.TweenVars;
type ScrollProps = Partial<ScrollTrigger.Vars>;

type Timeline = gsap.core.Timeline;
type RotationRef = { current: { rotation: { y: number } } };

type DOMTarget = Element | string;

type AnimateWithGsap = (
  target: DOMTarget,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
) => void;

type AnimateWithGsapTimeline = (
  timeline: Timeline,
  rotationRef: RotationRef,
  rotationState: number,
  firstTarget: gsap.TweenTarget,
  secondTarget: gsap.TweenTarget,
  animationProps: AnimationProps
) => void;

export const animateWithGsap: AnimateWithGsap = (
  target,
  animationProps,
  scrollProps = {}
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger:
        typeof target === 'string' ? document.querySelector(target) : target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline: AnimateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );
};
