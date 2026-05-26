import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * A component that displays a counter with a given end value.
 * The counter starts when the component is 40% visible in the viewport.
 * The counter is displayed in a white box with a shadow and rounded corners.
 * The counter is centered horizontally and has some padding.
 * The counter is displayed for 2 seconds.
 * @param {number} end The end value of the counter.
 * @returns {JSX.Element} The counter component.
 */
export default function Counter({ end }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div ref={ref} className="text-center p-6 bg-white shadow rounded-xl">
    
        {inView && <CountUp end={end} duration={2} />}
    </div>
  );
}
