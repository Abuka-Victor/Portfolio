import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from './ServiceCard';

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I specialize in crafting robust web applications using modern
        technologies, and I'm fluent in front-end and back-end development. With
        a strong foundation in JavaScript, I've mastered the art of implementing
        interactive user interfaces and efficient server-side functionalities.
        What truly sets me apart is my commitment to continuous improvement. I
        believe that the software world evolves rapidly, and staying ahead of
        the curve is essential. I'm passionate about learning and embracing the
        latest tools, frameworks, and best practices to deliver cutting-edge
        solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(About, 'about');
