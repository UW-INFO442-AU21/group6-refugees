import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Contact the local UNHCR or USRP Office</h3>
                <p className = "timeline-desc">
                    Depending on what country you're in, you may need to start by
                    approaching a representative of the United Nations High Commissioner
                    for Refugees (UNHCR) or U.S. Refugee Program (USRP) in your locality.
                    That office can put you through an initial screening, issue a 'refugee'
                    designation in your case, and link you up with a USCIS office for
                    further processing.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Contact a nearby USCIS Office</h3>
                <p className = "timeline-desc">
                    Your next step is to find a USCIS office that can provide you
                    with the application form and other necessary materials, and
                    orient you to what's required. This is also the office that
                    will make a decision on your application. A USCIS office
                    isn't the same as a U.S. embassy or consulate, though you
                    can certainly ask for the embassy or consulate's help
                    indirecting you to a USCIS office.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Fill out a Form 1-590 and Other Documents</h3>
                <p className = "timeline-desc">
                    This is the main form used to apply for refugee status. You'll
                    need to attach some other, backup forms to this one, including
                    Form G-325C (Biographic Information) and Form FD-258
                    (for taking fingerprints).
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Financial Sponsor Arrangements</h3>
                <p className = "timeline-desc">
                    In order to apply for refugee status in the United States,
                    you must have an assurance of financial support -- enough
                    to pay for your travel to the United States and initial
                    expenses when you arrive. You can arrange your sponsorship
                    through a U.S.-based family member or a charitable group,
                    perhaps affiliated with a human rights organization, church,
                    or other religious group. Your sponsor will need to fill
                    out USCIS Form I-34.
                </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Consider Family Members</h3>
                <p className = "timeline-desc">
                    If you are married and/or have children younger than 21
                    years, you can apply for their refugee status along with
                    yours. For this, you need to attach documents proving
                    your family relationship.
                </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Collect Evidence for your Case</h3>
                <p className = "timeline-desc">
                    First, you need to prove your identity, by any means
                    possible (USCIS recognizes that you may have fled too
                    quickly to get a passport). Perhaps you still have your
                    driver's license or a student identity card. You're
                    also expected to prove that you were persecuted or
                    fear persecution on the basis of your religion, race,
                    nationality, political opinion or membership in a
                    particular social group. Your own sworn statement is
                    a good starting point, as are other personal affidavits
                    from friends, relatives, doctors, or anyone in an
                    official position. If you have any membership cards
                    or documents from your group, make copies of those.
                    But not all the evidence needs to be so personalized;
                    some evidence can simply show the human rights
                    conditions within your country, in order to make
                    the point that you would face the same treatment
                    as others in your position. For example, good forms
                    of evidence might include newspaper articles or
                    reports by human rights organizations such as
                    Amnesty International or Human Rights Watch. Try to keep
                    these reports relevant to your case. For example, if
                    you're a man who was beaten during student protests,
                    find articles describing beatings at student protests
                    -- but don't bother with articles talking about, for
                    example, persecution of women.
                </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
            >
                <h3 className="vertical-timeline-element-title">Attend a Interview at a USCIS Office</h3>
                <p className = "timeline-desc">
                    After submitting your application to USCIS, it will call you and
                    your family members in for a personal interview. You'll be asked
                    to have medical examinations done soon beforehand. The USCIS
                    officer will review your application, attempt to verify your
                    identity and other key information, and question you about your
                    claimed need for refugee status.Be sure to review the
                    application beforehand, so that you've got all the key names,
                    dates, and facts clear in your head. The decision may rest on
                    the officer's perception that you are telling the truth (are credible)."
                </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
                iconStyle={{ background: '#367c7a', color: '#FEF8E7' }}
                //icon={<StarIcon />}
            />
        </VerticalTimeline>

    );
}

export default Timeline;