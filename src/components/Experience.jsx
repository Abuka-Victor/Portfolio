import { Fragment } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion';

import ExperienceCard from './ExperienceCard';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../style';

import { experiences } from '../constants';

const Experience = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Lofty Contributions to humanity
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </VerticalTimeline>
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Experience, 'work');
