import { Typography } from '@mui/material';

const content = (
  <Typography>
    As our reliance on data and machine learning decision systems continues to increase, we have a
    responsibility to ensure that the models we train guarantee individual privacy and do not
    exacerbate existing social disparities and unfair judgements. Privacy and fairness have been
    discussed more and more as the topic of ethics in artificial intelligence (AI) has gained
    prominence, however they are oven covered as distinct topics. Both privacy and fairness strive
    to protect the rights of users and subjects of software systems, and more often than not, work
    in tandem with each other. Privacy may be defined as ‘The condition of not having undocumented
    personal knowledge about one possessed by others’ Dwork and Roth (2014). Fairness has always
    been a more complicated notion to define, especially in the realm of computer science. Fairness,
    with regards to the law, is ’seeking to treat people justly on an individual basis with regards
    to the use of information regarding them’. Algorithmic fairness stipulates that ’A person’s
    experience with an information system should not irrelevantly depend on their personal
    characteristics’ Ekstrand et al. (2018). We measure an AI system’s fairness based on its impact
    on people and the harm it may cause. Allocation harms occur when a system makes decisions, for
    example, to assign loans. A quality of service harm occurs when a system works differently for
    one group of people vs another.
    <br />
    <br />
    When the fairness of a model is not considered or perhaps even taken for granted, there is an
    important risk that people may be negatively impacted and harmed. Cases of allocation harms and
    quality of service harms have been recently documented in the case of software systems. In 2018,
    commercially available facial recognition programs by major technology companies like IBM and
    Microsoft were recorded as demonstrating skin-type and gender-type biases, with far greater
    error rates when trying to determine the gender of darker-skinned women than light-skinned men.
    The effect of unfair systems can be even more sinister when applied to the context of the
    judiciary and criminal system. In 2016, a study showed that a software program used to predict a
    defendant’s likelihood of re-offending by giving them a score from 1 (low risk) to 10 (high
    risk) was more likely to allocate a low number to a white defendant. Black defendants were
    almost twice as likely as white defendants to be labelled as higher risk but not actually
    re-offend. If we are trusting automated decisions to make decisions that impact people’s lives,
    we have a responsibility to ensure that they treat all people fairly.
    <br />
    <br />
    Whilst the importance of fairness and fair automated systems has only recently become more
    apparent, a large portion of the general public has always been concerned about the privacy
    risks associated with data leakage and data usage. Especially in cases where automated systems
    are trusted with sensitive data, such as health records, it is important that we prevent
    personal information from being misused, from being used for tasks the user has not expected or
    explicitly consented to, and from falling into the wrong hands, perhaps due to hacks.This last
    point is particularly pertinent in the case of machine learning where we want to ensure training
    data privacy, and guarantee that a malicious actor will not be able to reverse engineer our
    model to access our training 2data, or infer any information about our training data from the
    predictions made by our models.
    <br />
    <br />
    Both privacy and fairness search to protect people from exploitation, and we should be looking
    to ensure that future machine learning systems do not disenfranchise any group for any reason.
    However, existing work by Cummings et al. (2019) has asked if it is currently possible to
    guarantee the privacy of training data, fairness of predictions made by a model, and reasonable
    overall accuracy, concluded that it is possible to satisfy only two of these three criteria.
    Their findings force us to ask the question, if none of the current, existing algorithms and
    models used today to make decisions and allocate resources are fair, private and accurate, which
    conditions are being prioritised and which are being ignored. Furthermore, who ends up suffering
    from these shortcomings? More often than not, work by Farrand et al. (2020) reveals that
    minority subgroups of data suffer more utility loss compared to others. When it comes to
    accuracy, the less represented groups which already achieve lower accuracy, end up losing more
    utility: the poor become poorer. In addition, as stricter privacy guarantees are imposed, this
    gap gets wider. This gap can have hugely significant societal and economic implications for
    people in all areas.
  </Typography>
);

export default {
  slug: 'the-importance-of-privacy-and-fairness-in-machine-learning',
  title: 'The Importance of Privacy and Fairness in Machine Learning',
  date: '2021-05-01',
  description:
    'As our reliance on data and machine learning decision systems continues to increase, we have a responsibility to ensure that the models we train guarantee individual privacy and do not exacerbate existing social disparities and unfair judgements.',
  tags: ['cs'],
  content,
};
