export const diseases = [
  {
    id: 'hypertension',
    name: 'Hypertension (High Blood Pressure)',
    summary:
      'High blood pressure usually has no warning signs, yet it quietly damages blood vessels, the heart, kidneys, and eyes. Daily food and movement choices can lower readings within weeks.',
    motivation:
      'Small salt cuts and steady walking help many people avoid new medications and keep energy up for family and work.',
    prevalence: 'Affects roughly 1 in 3 adults worldwide.',
    warningSigns: [
      'Often silent; check your pressure at least once every six months.',
      'May cause morning headaches, nosebleeds, or shortness of breath when uncontrolled.'
    ],
    doctorContact: [
      'Consult a clinician if home readings stay above 140/90 mmHg for one week.',
      'Seek emergency care for chest pain, sudden weakness, or trouble speaking.'
    ],
    categories: {
      diet: [
        {
          title: 'Follow the DASH Plate',
          description:
            'Fill half of each plate with colorful vegetables and fruits, one quarter with whole grains, and the last quarter with lean protein. Include low-fat dairy or calcium-rich alternatives.',
          serving: 'Aim for 2 cups of vegetables and 1 cup of fruit every day.',
          metric: 'Record daily vegetable and fruit servings.',
          evidence: 'National Heart, Lung, and Blood Institute – DASH Eating Plan (2023).',
          sourceUrl: 'https://www.nhlbi.nih.gov/education/dash-eating-plan',
          media: null
        },
        {
          title: 'Cut Back on Sodium',
          description:
            'Limit packaged snacks, cured meats, and restaurant sauces. Swap salt with herbs, citrus, and garlic.',
          serving: 'Keep sodium below 1,500 mg per day (about 3/4 teaspoon of salt).',
          metric: 'Note the number of high-salt foods skipped each day.',
          evidence: 'American Heart Association – Sodium and Blood Pressure (2024).',
          sourceUrl: 'https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Brisk Walk Intervals',
          description:
            'Walk at a comfortable pace for three minutes, then speed up for two minutes. Repeat six times to reach 30 minutes.',
          duration: '30 minutes per day, at least 5 days each week.',
          metric: 'Track minutes of brisk walking completed.',
          evidence: 'World Health Organization – Physical Activity Guidelines (2023).',
          sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
          media: {
            type: 'video',
            label: 'WHO: How to stay active with brisk walking',
            url: 'https://www.youtube.com/watch?v=8BcPHWGQO44'
          }
        },
        {
          title: 'Chair Strength Circuit',
          description:
            'Complete sit-to-stands, wall push-ups, and seated marches to build strength without stressing joints.',
          duration: '2 rounds of 10 repetitions for each move, 3 times per week.',
          metric: 'Count strength sessions per week.',
          evidence: 'American College of Sports Medicine – Exercise for Hypertension (2022).',
          sourceUrl: 'https://www.acsm.org/education-resources/trending-topics-resources/physical-activity-and-hypertension',
          media: {
            type: 'video',
            label: 'NHS: 10-minute firming workout',
            url: 'https://www.youtube.com/watch?v=6uXf7RGmQaM'
          }
        }
      ],
      lifestyle: [
        {
          title: '5-Minute Breathing Breaks',
          description:
            'Practice slow diaphragmatic breathing: inhale through the nose for 4 counts, exhale through the mouth for 6 counts.',
          metric: 'Log breathing breaks taken each day.',
          evidence: 'American Heart Association – Stress Management for Blood Pressure (2023).',
          sourceUrl: 'https://www.heart.org/en/healthy-living/healthy-lifestyle/stress-management',
          media: {
            type: 'video',
            label: 'Cleveland Clinic: Guided breathing for blood pressure',
            url: 'https://www.youtube.com/watch?v=Uxbdx-SeOOo'
          }
        },
        {
          title: 'Consistent Sleep Routine',
          description:
            'Aim for 7–9 hours of sleep. Go to bed and wake up at the same time daily, and reduce screen time 30 minutes before sleep.',
          metric: 'Record nightly sleep duration.',
          evidence: 'Centers for Disease Control and Prevention – Sleep and Blood Pressure (2023).',
          sourceUrl: 'https://www.cdc.gov/bloodpressure/sleep.htm',
          media: null
        }
      ]
    }
  },
  {
    id: 'diabetes',
    name: 'Type 2 Diabetes',
    summary:
      'Type 2 diabetes affects how the body turns food into energy. Balanced meals, movement, and monitoring can keep blood glucose stable and prevent complications.',
    motivation:
      'Many people lower A1C values in three months with steady habits, meaning fewer clinic visits and more energy.',
    prevalence: 'Over 500 million adults live with diabetes worldwide.',
    warningSigns: [
      'Common signs include increased thirst, frequent urination, and blurred vision.',
      'Some people have no symptoms; regular screening is important.'
    ],
    doctorContact: [
      'Consult a clinician if fasting blood sugar stays above 126 mg/dL (7 mmol/L).',
      'Seek urgent care for dizziness, nausea, or confusion with high sugar readings.'
    ],
    categories: {
      diet: [
        {
          title: 'Quarter-Plate Carbs',
          description:
            'Fill half your plate with non-starchy vegetables, one quarter with lean protein, and one quarter with whole grains or starchy vegetables.',
          serving: 'Limit carbohydrate portions to the size of a cupped hand per meal.',
          metric: 'Track balanced-plate meals per day.',
          evidence: 'American Diabetes Association – Create Your Plate (2024).',
          sourceUrl: 'https://diabetes.org/food-nutrition/eating-well',
          media: null
        },
        {
          title: 'Fiber-Rich Breakfast',
          description:
            'Choose oats, chia pudding, or whole-grain toast with nut butter to slow glucose spikes.',
          serving: 'At least 5 grams of fiber at breakfast.',
          metric: 'Record fiber grams at breakfast.',
          evidence: 'Harvard T.H. Chan School – Fiber and Blood Sugar (2023).',
          sourceUrl: 'https://www.hsph.harvard.edu/nutritionsource/carbohydrates/fiber/',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Post-Meal Walks',
          description:
            'Walk for 10–15 minutes within 30 minutes after meals to help muscles use glucose.',
          duration: 'Three 10-minute walks daily.',
          metric: 'Count post-meal walks completed.',
          evidence: 'Diabetes Care Journal – Postprandial Walking Study (2022).',
          sourceUrl: 'https://diabetesjournals.org/care/article/45/4/873/138444/',
          media: {
            type: 'video',
            label: 'Mayo Clinic: Benefits of post-meal walking',
            url: 'https://www.youtube.com/watch?v=lbjX5fomal8'
          }
        },
        {
          title: 'Resistance Band Routine',
          description:
            'Use a light resistance band for seated rows, biceps curls, and leg presses to build muscle that improves insulin use.',
          duration: '2 sets of 12 repetitions, 3 days per week.',
          metric: 'Track resistance workouts per week.',
          evidence: 'American College of Sports Medicine – Resistance Training and Diabetes (2023).',
          sourceUrl: 'https://www.acsm.org',
          media: {
            type: 'video',
            label: 'Diabetes UK: Simple resistance band exercises',
            url: 'https://www.youtube.com/watch?v=maO4Wjn-2Lw'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Foot Check Routine',
          description:
            'Inspect feet daily for cuts, redness, or swelling. Moisturize heels and keep toenails trimmed straight.',
          metric: 'Mark completed foot checks.',
          evidence: 'International Diabetes Federation – Foot Care Guidelines (2023).',
          sourceUrl: 'https://idf.org/e-library/guidelines/81-diabetes-and-foot-care.html',
          media: null
        },
        {
          title: 'Stress Downshift',
          description:
            'Schedule a 10-minute relaxation break with stretching or prayer to lower cortisol and stabilize glucose.',
          metric: 'Log daily relaxation breaks.',
          evidence: 'Journal of Behavioral Medicine – Mindfulness and Glycemic Control (2021).',
          sourceUrl: 'https://link.springer.com/article/10.1007/s10865-021-00273-w',
          media: {
            type: 'video',
            label: 'UCLA Mindful: 10-minute stress reset',
            url: 'https://www.youtube.com/watch?v=cEQP4VVew-c'
          }
        }
      ]
    }
  },
  {
    id: 'obesity',
    name: 'Obesity and Metabolic Syndrome',
    summary:
      'Carrying excess weight raises the risk for diabetes, heart disease, and joint pain. Slow, sustainable changes in eating, movement, and daily routines support lasting weight loss.',
    motivation:
      'Losing even 5–7% of body weight improves blood pressure, sugar, and energy, making daily tasks easier.',
    prevalence: 'Over 1 billion people live with overweight or obesity.',
    warningSigns: [
      'Waist size above 35 inches (89 cm) for women or 40 inches (102 cm) for men raises risk.',
      'Often linked with fatigue, joint discomfort, or poor sleep.'
    ],
    doctorContact: [
      'Discuss a plan with a clinician if BMI is 30 or higher or if weight gain is rapid.',
      'Seek urgent care for chest pain, severe shortness of breath, or sudden leg swelling.'
    ],
    categories: {
      diet: [
        {
          title: 'Protein at Every Meal',
          description:
            'Include palm-sized portions of beans, eggs, fish, or yogurt to stay full longer and protect muscle.',
          serving: '20–30 grams of protein per meal.',
          metric: 'Count protein-rich meals daily.',
          evidence: 'Academy of Nutrition and Dietetics – Weight Management (2023).',
          sourceUrl: 'https://www.eatright.org',
          media: null
        },
        {
          title: 'Smart Beverage Swap',
          description:
            'Replace sugary drinks with water, sparkling water, or unsweetened tea flavored with fruits or herbs.',
          serving: 'Limit sugary beverages to one or fewer per week.',
          metric: 'Track sugary drinks avoided each day.',
          evidence: 'World Health Organization – Sugary Drinks and Obesity (2023).',
          sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Low-Impact Cardio Mix',
          description:
            'Alternate marching in place, step touches, and light knee lifts to raise heart rate without joint strain.',
          duration: '20–30 minutes, 5 days per week.',
          metric: 'Log cardio minutes each day.',
          evidence: 'Centers for Disease Control and Prevention – Physical Activity for Weight Loss (2024).',
          sourceUrl: 'https://www.cdc.gov/healthyweight/physical_activity',
          media: {
            type: 'video',
            label: 'HASfit: 20-minute beginner cardio workout',
            url: 'https://www.youtube.com/watch?v=ml6cT4AZdqI'
          }
        },
        {
          title: 'Strength + Balance Combo',
          description:
            'Perform bodyweight squats, supported lunges, and standing crunches to build lean muscle and core strength.',
          duration: '3 sets of 10 repetitions, 3 times per week.',
          metric: 'Count strength sessions per week.',
          evidence: 'American College of Sports Medicine – Resistance Training for Weight Loss (2022).',
          sourceUrl: 'https://www.acsm.org',
          media: {
            type: 'video',
            label: 'Body Project: Low-impact strength session',
            url: 'https://www.youtube.com/watch?v=UBMk30rjy0o'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Meal Planning Sunday',
          description:
            'Set aside one hour weekly to plan simple meals, prep vegetables, and portion snacks to avoid drive-thru choices.',
          metric: 'Record weekly meal prep sessions.',
          evidence: 'International Journal of Behavioral Nutrition – Meal Planning and Weight (2021).',
          sourceUrl: 'https://ijbnpa.biomedcentral.com/articles/10.1186/s12966-021-01163-8',
          media: null
        },
        {
          title: 'Sleep 7–9 Hours',
          description:
            'Short sleep disrupts hunger hormones. Keep a dark, cool bedroom and limit caffeine after noon.',
          metric: 'Track nightly sleep duration.',
          evidence: 'Sleep Foundation – Sleep and Weight Control (2023).',
          sourceUrl: 'https://www.sleepfoundation.org/physical-health/how-sleep-affects-your-weight',
          media: null
        }
      ]
    }
  },
  {
    id: 'heart-disease',
    name: 'Ischaemic Heart Disease',
    summary:
      'Heart disease happens when arteries feeding the heart become narrow. Nutrition, activity, and stress control help keep arteries flexible and blood flowing.',
    motivation:
      'Protecting your heart now lowers the chance of hospital stays and keeps you strong for family responsibilities.',
    prevalence: 'Nearly 200 million adults live with coronary artery disease.',
    warningSigns: [
      'Chest pressure, jaw or arm pain with activity, shortness of breath.',
      'Fatigue or swelling in legs can signal reduced heart function.'
    ],
    doctorContact: [
      'See a clinician for any new chest discomfort or breathlessness.',
      'Call emergency services if pain lasts more than 5 minutes or is paired with sweating or nausea.'
    ],
    categories: {
      diet: [
        {
          title: 'Mediterranean-style Meals',
          description:
            'Center meals on vegetables, legumes, whole grains, olive oil, nuts, and fish twice per week.',
          serving: 'Use 1–2 tablespoons of olive oil daily in place of butter.',
          metric: 'Log Mediterranean-style meals consumed.',
          evidence: 'New England Journal of Medicine – Mediterranean Diet Study (2018).',
          sourceUrl: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1800389',
          media: null
        },
        {
          title: 'Add Soluble Fiber',
          description:
            'Include oats, barley, apples, or beans daily to help lower LDL cholesterol.',
          serving: '5–10 grams of soluble fiber per day (about 1½ cups cooked oats or beans).',
          metric: 'Track servings of soluble fiber foods.',
          evidence: 'American Heart Association – Soluble Fiber and Cholesterol (2022).',
          sourceUrl: 'https://www.heart.org',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Interval Cycling or Walking',
          description:
            'Alternate 1 minute of faster effort with 2 minutes easy pace. Works indoors on a stationary bike or outdoors.',
          duration: '30 minutes, 3–5 days per week.',
          metric: 'Record interval sessions completed.',
          evidence: 'European Heart Journal – HIIT for Cardiac Rehab (2021).',
          sourceUrl: 'https://academic.oup.com/eurheartj/article/42/21/2055/6130989',
          media: {
            type: 'video',
            label: 'Cardiac College: Interval walking demo',
            url: 'https://www.youtube.com/watch?v=FeF8Qn4Z6jY'
          }
        },
        {
          title: 'Stretch and Strengthen',
          description:
            'Gentle strength moves (modified push-ups, leg raises) paired with stretching keep circulation flowing.',
          duration: '15 minutes daily.',
          metric: 'Count daily mobility routines.',
          evidence: 'American Heart Association – Cardiac Rehab Home Exercises (2023).',
          sourceUrl: 'https://www.heart.org/en/health-topics/cardiac-rehab',
          media: {
            type: 'video',
            label: 'Cleveland Clinic: Heart patient exercise routine',
            url: 'https://www.youtube.com/watch?v=9O4M9NFMynQ'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Daily Blood Pressure Check',
          description:
            'Measure at the same time each morning after resting and keep a simple log to share with your clinician.',
          metric: 'Record daily blood pressure readings.',
          evidence: 'American College of Cardiology – Self Monitoring Guidance (2022).',
          sourceUrl: 'https://www.acc.org',
          media: null
        },
        {
          title: 'Social Connection Time',
          description:
            'Spend 15 minutes connecting with a friend or family member to reduce stress hormones.',
          metric: 'Log daily connection moments.',
          evidence: 'Harvard Health – Social Support and Heart Disease (2020).',
          sourceUrl: 'https://www.health.harvard.edu/heart-health/the-heart-and-the-human-connection',
          media: null
        }
      ]
    }
  },
  {
    id: 'copd',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    summary:
      'COPD causes airflow blockage, leading to coughing, breathlessness, and fatigue. Breathing techniques, nutrition, and gentle exercise improve lung efficiency.',
    motivation:
      'Consistent self-care reduces flare-ups and keeps you active for daily tasks.',
    prevalence: 'Over 200 million people live with COPD globally.',
    warningSigns: [
      'Chronic cough with mucus, shortness of breath on mild exertion.',
      'Frequent chest infections or wheezing.'
    ],
    doctorContact: [
      'Contact a clinician if you notice more mucus, color changes, or shortness of breath.',
      'Seek emergency care for lips or fingernails turning blue, or severe breathing difficulty.'
    ],
    categories: {
      diet: [
        {
          title: 'Small Frequent Meals',
          description:
            'Eat smaller portions every 3–4 hours to avoid stomach fullness that can limit breathing.',
          serving: 'Aim for 5–6 small meals of 300–400 calories each.',
          metric: 'Count balanced small meals per day.',
          evidence: 'American Lung Association – Nutrition for COPD (2023).',
          sourceUrl: 'https://www.lung.org/lung-health-diseases/lung-disease-lookup/copd/living-with-copd/nutrition',
          media: null
        },
        {
          title: 'Hydrate to Thin Mucus',
          description:
            'Sip water, herbal teas, or broths throughout the day to keep mucus loose.',
          serving: '6–8 cups of fluids daily unless told otherwise by a clinician.',
          metric: 'Track cups of fluid consumed.',
          evidence: 'British Lung Foundation – COPD Self-Management (2022).',
          sourceUrl: 'https://www.blf.org.uk',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Pursed-Lip Breathing Walks',
          description:
            'Inhale through the nose for 2 counts, exhale slowly through pursed lips for 4 counts while walking.',
          duration: '10–15 minutes, twice daily.',
          metric: 'Log breathing walk sessions.',
          evidence: 'Global Initiative for Chronic Obstructive Lung Disease (GOLD) – Pulmonary Rehab (2023).',
          sourceUrl: 'https://goldcopd.org',
          media: {
            type: 'video',
            label: 'American Lung Association: Pursed-lip breathing demo',
            url: 'https://www.youtube.com/watch?v=CC8yqjeyxMU'
          }
        },
        {
          title: 'Seated Strength Routine',
          description:
            'Perform seated leg lifts, arm raises with light weights, and ankle pumps to maintain muscle.',
          duration: '15 minutes on alternate days.',
          metric: 'Track seated strength sessions per week.',
          evidence: 'COPD Foundation – At-home Exercise Guide (2022).',
          sourceUrl: 'https://www.copdfoundation.org',
          media: {
            type: 'video',
            label: 'COPD Foundation: Chair exercises',
            url: 'https://www.youtube.com/watch?v=omkQmFR6CjU'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Smoke-Free Environment',
          description:
            'Avoid tobacco smoke, wood smoke, and strong chemical fumes. Ask family to smoke outside and ventilate cooking spaces.',
          metric: 'Note smoke-free days achieved.',
          evidence: 'World Health Organization – Tobacco and COPD (2023).',
          sourceUrl: 'https://www.who.int/health-topics/tobacco',
          media: null
        },
        {
          title: 'Action Plan Tracking',
          description:
            'Keep an action plan with rescue medications, triggers, and emergency contacts visible at home.',
          metric: 'Confirm daily that inhalers and spacing devices are within reach.',
          evidence: 'Global Initiative for Chronic Obstructive Lung Disease – Self-Management (2023).',
          sourceUrl: 'https://goldcopd.org',
          media: null
        }
      ]
    }
  },
  {
    id: 'depression',
    name: 'Depression (Major and Persistent)',
    summary:
      'Depression affects mood, sleep, appetite, and energy. Structured routines, movement, and social support play key roles in recovery alongside clinical care.',
    motivation:
      'Daily micro-actions rebuild energy and help people return to activities they enjoy.',
    prevalence: 'Over 260 million people worldwide experience depression.',
    warningSigns: [
      'Persistent sadness or emptiness, loss of interest, changes in sleep or appetite.',
      'May also show as irritability, headaches, or stomach issues.'
    ],
    doctorContact: [
      'Contact a clinician if symptoms last more than two weeks or disrupt daily life.',
      'Seek emergency help immediately for thoughts of self-harm.'
    ],
    categories: {
      diet: [
        {
          title: 'Omega-3 Rich Meals',
          description:
            'Include fatty fish, flaxseed, or walnuts to support brain health and mood.',
          serving: 'Two servings of fatty fish per week or daily plant-based omega-3 sources.',
          metric: 'Track omega-3 servings per week.',
          evidence: 'JAMA Network – Omega-3 and Depression Meta-analysis (2022).',
          sourceUrl: 'https://jamanetwork.com',
          media: null
        },
        {
          title: 'Steady Meal Schedule',
          description:
            'Eat small, regular meals to stabilize blood sugar and reduce mood swings.',
          serving: 'Three balanced meals with one healthy snack.',
          metric: 'Log daily meal schedule adherence.',
          evidence: 'Harvard Medical School – Food and Mood (2023).',
          sourceUrl: 'https://www.health.harvard.edu/mind-and-mood/foods-linked-to-better-brainpower',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Sunlight Walk',
          description:
            'Walk outdoors in daylight for mood-boosting light exposure and gentle movement.',
          duration: '20 minutes, at least 5 days per week.',
          metric: 'Count sunlight walks completed.',
          evidence: 'American Psychological Association – Exercise and Mood (2023).',
          sourceUrl: 'https://www.apa.org/topics/exercise-fitness-stress',
          media: {
            type: 'video',
            label: 'NHS Every Mind Matters: Walking for wellbeing',
            url: 'https://www.youtube.com/watch?v=U5Qp8xnPSEU'
          }
        },
        {
          title: 'Gentle Yoga Flow',
          description:
            'Use a beginner-friendly yoga flow or chair yoga sequence for relaxation and body awareness.',
          duration: '15 minutes, 3–4 days per week.',
          metric: 'Track yoga sessions per week.',
          evidence: 'Frontiers in Psychiatry – Yoga for Depression Review (2021).',
          sourceUrl: 'https://www.frontiersin.org/articles/10.3389/fpsyt.2021.613130/full',
          media: {
            type: 'video',
            label: 'Yoga with Adriene: 15-minute gentle practice',
            url: 'https://www.youtube.com/watch?v=VaoV1PrYft4'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Daily Mood Check-In',
          description:
            'Write one sentence about your mood and one thing you are grateful for each day.',
          metric: 'Record daily journal entries.',
          evidence: 'Positive Psychology Journal – Gratitude and Mood (2020).',
          sourceUrl: 'https://positivepsychology.com/gratitude-research',
          media: null
        },
        {
          title: 'Sleep-Wake Anchors',
          description:
            'Set consistent wake-up and bedtime, even on weekends, to steady the body clock.',
          metric: 'Track days with consistent sleep schedule.',
          evidence: 'Sleep Medicine Reviews – Circadian Rhythm and Depression (2022).',
          sourceUrl: 'https://www.sciencedirect.com/science/article/pii/S1087079221000987',
          media: null
        }
      ]
    }
  },
  {
    id: 'osteoarthritis',
    name: 'Osteoarthritis',
    summary:
      'Osteoarthritis wears down the cushioning between joints, causing pain and stiffness. Gentle activity and anti-inflammatory foods ease symptoms.',
    motivation:
      'Maintaining strong muscles reduces pain and keeps you moving for work and family duties.',
    prevalence: 'Over 500 million people have arthritis worldwide.',
    warningSigns: [
      'Joint pain that worsens with activity and eases with rest.',
      'Morning stiffness lasting less than 30 minutes, mild swelling.'
    ],
    doctorContact: [
      'See a clinician if joint pain limits daily activities or swelling increases.',
      'Seek urgent care for sudden joint redness, warmth, or fever.'
    ],
    categories: {
      diet: [
        {
          title: 'Anti-Inflammatory Plate',
          description:
            'Load meals with colorful vegetables, berries, whole grains, and omega-3 rich fish.',
          serving: '2 servings of colorful fruits and 2 cups of vegetables daily.',
          metric: 'Track anti-inflammatory meals per day.',
          evidence: 'Arthritis Foundation – Anti-Inflammatory Diet (2023).',
          sourceUrl: 'https://www.arthritis.org/health-wellness/healthy-living/nutrition/anti-inflammatory-diet',
          media: null
        },
        {
          title: 'Turmeric Ginger Sip',
          description:
            'Drink a warm turmeric-ginger tea with black pepper to reduce inflammation.',
          serving: '1 cup daily, if no contraindications.',
          metric: 'Record herbal anti-inflammatory drinks.',
          evidence: 'Journal of Medicinal Food – Curcumin and Joint Pain (2021).',
          sourceUrl: 'https://www.liebertpub.com/doi/10.1089/jmf.2020.4740',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Joint-Friendly Mobility',
          description:
            'Perform ankle circles, knee extensions, and hip swings daily to keep joints lubricated.',
          duration: '10 minutes morning and evening.',
          metric: 'Log mobility sessions per day.',
          evidence: 'Osteoarthritis Research Society International – Exercise Guideline (2022).',
          sourceUrl: 'https://oarsi.org',
          media: {
            type: 'video',
            label: 'Versus Arthritis: Joint mobilising exercises',
            url: 'https://www.youtube.com/watch?v=psN1DORYYV0'
          }
        },
        {
          title: 'Water Workouts',
          description:
            'Use pool walking or water aerobics to reduce joint stress while strengthening muscles.',
          duration: '30 minutes, 2–3 times per week.',
          metric: 'Track aquatic sessions per week.',
          evidence: 'Cochrane Review – Aquatic Exercise for OA (2021).',
          sourceUrl: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005523.pub3/full',
          media: null
        }
      ],
      lifestyle: [
        {
          title: 'Warm-Up Before Tasks',
          description:
            'Use a heating pad or warm shower and gentle stretches before chores to reduce pain.',
          metric: 'Record warm-up routines before physical tasks.',
          evidence: 'Arthritis Foundation – Daily Living Tips (2022).',
          sourceUrl: 'https://www.arthritis.org/health-wellness/healthy-living/daily-living',
          media: null
        },
        {
          title: 'Weight Support Plan',
          description:
            'Losing 5–10% of body weight can halve knee pain. Combine meal planning with a walking buddy.',
          metric: 'Log weekly weight or waist measurements.',
          evidence: 'Arthritis Care & Research – Weight Loss and Knee Pain (2018).',
          sourceUrl: 'https://onlinelibrary.wiley.com/doi/full/10.1002/acr.23442',
          media: null
        }
      ]
    }
  },
  {
    id: 'asthma',
    name: 'Asthma',
    summary:
      'Asthma narrows the airways, causing wheezing and shortness of breath. Triggers include allergens, cold air, and exercise without warming up.',
    motivation:
      'With the right habits, most people can enjoy daily activities without flare-ups.',
    prevalence: 'Over 260 million people live with asthma worldwide.',
    warningSigns: [
      'Coughing at night, wheezing, chest tightness, or breathlessness during exercise.',
      'Frequent use of rescue inhaler indicates poor control.'
    ],
    doctorContact: [
      'See a clinician if rescue inhaler is needed more than twice per week.',
      'Seek emergency care for rapid breathing, blue lips, or difficulty speaking.'
    ],
    categories: {
      diet: [
        {
          title: 'Colorful Produce Boost',
          description:
            'Vitamin C and antioxidants from fruits and vegetables may reduce airway inflammation.',
          serving: '5 servings of fruits and vegetables daily.',
          metric: 'Track servings of produce per day.',
          evidence: 'European Respiratory Journal – Diet and Asthma Review (2020).',
          sourceUrl: 'https://erj.ersjournals.com/content/55/6/1901726',
          media: null
        },
        {
          title: 'Omega-3 Support',
          description:
            'Eat fatty fish or flaxseeds to support lung health and reduce inflammation.',
          serving: 'Two servings per week.',
          metric: 'Log omega-3 servings weekly.',
          evidence: 'Nutrients Journal – Omega-3 and Asthma (2021).',
          sourceUrl: 'https://www.mdpi.com/2072-6643/13/9/3069',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Warm-Up Ladder',
          description:
            'Begin with slow marching, shoulder rolls, and arm swings before moderate exercise to reduce exercise-induced symptoms.',
          duration: '10-minute warm-up before each workout.',
          metric: 'Count warm-ups completed.',
          evidence: 'Global Initiative for Asthma – Physical Activity Tips (2023).',
          sourceUrl: 'https://ginasthma.org',
          media: {
            type: 'video',
            label: 'Asthma UK: Warm-up for active breathing',
            url: 'https://www.youtube.com/watch?v=olk-JNYgPJc'
          }
        },
        {
          title: 'Breathing-Focused Yoga',
          description:
            'Practice gentle yoga poses with controlled breathing to improve lung function.',
          duration: '20 minutes, 3 times per week.',
          metric: 'Track yoga-breathing sessions.',
          evidence: 'Cochrane Review – Yoga for Asthma (2016).',
          sourceUrl: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010346.pub2/full',
          media: {
            type: 'video',
            label: 'Art of Living: Yoga for asthma relief',
            url: 'https://www.youtube.com/watch?v=r5YcN0wBkbw'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Trigger Diary',
          description:
            'Keep a simple log of dust, pollen, pets, or smoke exposures to spot triggers.',
          metric: 'Record exposures and symptoms daily.',
          evidence: 'National Asthma Council Australia – Asthma Action Plans (2022).',
          sourceUrl: 'https://www.nationalasthma.org.au',
          media: null
        },
        {
          title: 'Bedroom Allergy Clean-Up',
          description:
            'Wash bedding weekly in hot water, use dust-mite covers, and keep pets out of the bedroom.',
          metric: 'Tick off weekly bedroom cleaning tasks.',
          evidence: 'American College of Allergy, Asthma & Immunology – Allergen Control (2023).',
          sourceUrl: 'https://acaai.org/allergies/management-treatment/',
          media: null
        }
      ]
    }
  },
  {
    id: 'cancer',
    name: 'Cancer Survivorship (General)',
    summary:
      'People living with and beyond cancer benefit from targeted nutrition, activity, and stress reduction to improve recovery and reduce recurrence risk.',
    motivation:
      'Healthy routines restore strength and energy during and after treatment.',
    prevalence: 'Over 50 million cancer survivors worldwide.',
    warningSigns: [
      'Monitor for unexplained weight loss, persistent fatigue, or new pain.',
      'Keep track of any treatment side-effects such as neuropathy or swelling.'
    ],
    doctorContact: [
      'Follow up with your oncology team as scheduled.',
      'Seek urgent care for fever above 38°C (100.4°F), sudden bleeding, or severe pain.'
    ],
    categories: {
      diet: [
        {
          title: 'Plant-Forward Plate',
          description:
            'Base meals on vegetables, whole grains, legumes, and fruits to provide protective phytonutrients.',
          serving: 'At least 2½ cups vegetables and 2 cups fruit daily.',
          metric: 'Track plant-based meals per day.',
          evidence: 'American Cancer Society – Nutrition Guidelines for Survivors (2020).',
          sourceUrl: 'https://www.cancer.org/healthy/eat-healthy-get-active.html',
          media: null
        },
        {
          title: 'Protein for Repair',
          description:
            'Include lean protein (beans, fish, eggs) or plant-based protein with every meal to rebuild tissues.',
          serving: '20–30 grams protein per meal.',
          metric: 'Record protein-rich meals.',
          evidence: 'Academy of Nutrition and Dietetics – Oncology Nutrition (2021).',
          sourceUrl: 'https://www.oncologynutrition.org',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Energy Walks',
          description:
            'Short brisk walks improve energy and reduce treatment-related fatigue.',
          duration: '15–20 minutes daily, adjust to energy level.',
          metric: 'Log walking minutes per day.',
          evidence: 'American Society of Clinical Oncology – Exercise and Cancer Fatigue (2022).',
          sourceUrl: 'https://www.cancer.net',
          media: {
            type: 'video',
            label: 'Macmillan Cancer Support: Moving forward walking tips',
            url: 'https://www.youtube.com/watch?v=7sS6QSkFFt4'
          }
        },
        {
          title: 'Gentle Strength Routine',
          description:
            'Use light dumbbells or water bottles for seated presses, rows, and squats to rebuild muscle.',
          duration: '2 sets of 10 reps, 2–3 times per week.',
          metric: 'Track strength sessions per week.',
          evidence: 'Clinical Oncology Society of Australia – Exercise in Cancer Care (2018).',
          sourceUrl: 'https://www.cosa.org.au',
          media: {
            type: 'video',
            label: 'Livestrong: At-home strength for survivors',
            url: 'https://www.youtube.com/watch?v=fDGQdfpo348'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Symptom Diary',
          description:
            'Record pain, fatigue, nausea, or appetite changes and share with your care team.',
          metric: 'Daily symptom diary entries.',
          evidence: 'American Society of Clinical Oncology – Survivorship Care (2023).',
          sourceUrl: 'https://www.cancer.net/survivorship',
          media: null
        },
        {
          title: 'Mind-Body Recharge',
          description:
            'Practice guided imagery, meditation, or prayer to reduce stress hormones and improve sleep.',
          metric: 'Log mind-body sessions per week.',
          evidence: 'Psycho-Oncology Journal – Mindfulness in Cancer Survivors (2021).',
          sourceUrl: 'https://onlinelibrary.wiley.com/journal/10991611',
          media: {
            type: 'video',
            label: 'Memorial Sloan Kettering: Guided meditation for healing',
            url: 'https://www.youtube.com/watch?v=qz3ggzF1mQI'
          }
        }
      ]
    }
  },
  {
    id: 'stroke',
    name: 'Stroke Recovery and Prevention',
    summary:
      'Stroke affects blood flow to the brain, causing mobility, speech, or memory changes. Lifestyle choices reduce the chance of another stroke and support recovery.',
    motivation:
      'Daily routines rebuild strength and confidence to return to valued activities.',
    prevalence: 'Over 100 million people live with stroke effects.',
    warningSigns: [
      'F.A.S.T.: Face drooping, Arm weakness, Speech difficulty—time to call emergency services.',
      'After stroke, monitor for sudden headaches or vision changes.'
    ],
    doctorContact: [
      'Attend all follow-up visits for medication review and therapy.',
      'Call emergency services immediately if new F.A.S.T. symptoms appear.'
    ],
    categories: {
      diet: [
        {
          title: 'Blood Pressure Friendly Meals',
          description:
            'Emphasize vegetables, low-sodium foods, whole grains, and potassium-rich fruits.',
          serving: 'Aim for 4–5 servings of vegetables and fruits daily.',
          metric: 'Track low-sodium meals per day.',
          evidence: 'American Stroke Association – Healthy Eating After Stroke (2023).',
          sourceUrl: 'https://www.stroke.org/en/about-stroke/life-after-stroke',
          media: null
        },
        {
          title: 'Limit Added Sugars',
          description:
            'Check labels for added sugars in drinks and snacks to avoid weight gain and high triglycerides.',
          serving: 'Keep added sugar under 25 grams per day.',
          metric: 'Record sugary items avoided.',
          evidence: 'World Health Organization – Sugar Intake Guideline (2015, reaffirmed 2023).',
          sourceUrl: 'https://www.who.int/publications/i/item/9789241549028',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Therapy Walking Plan',
          description:
            'Use a walker or cane as recommended and walk short distances several times per day, focusing on heel-to-toe steps.',
          duration: 'Total 20–30 minutes daily, broken into short walks.',
          metric: 'Log total walking minutes.',
          evidence: 'Stroke Journal – Task-Oriented Walking improves outcomes (2020).',
          sourceUrl: 'https://www.ahajournals.org/journal/str',
          media: {
            type: 'video',
            label: 'American Stroke Association: Safe walking practice',
            url: 'https://www.youtube.com/watch?v=CdH42o9-Y5Q'
          }
        },
        {
          title: 'Hand and Arm Rehab',
          description:
            'Use therapy putty or a small ball to squeeze, open, and spread fingers to regain dexterity.',
          duration: '10 minutes, 2–3 times daily.',
          metric: 'Track hand therapy sessions.',
          evidence: 'National Institute of Neurological Disorders and Stroke – Rehab Tips (2023).',
          sourceUrl: 'https://www.ninds.nih.gov/health-information/patient-caregiver-education/hope-through-research/stroke',
          media: {
            type: 'video',
            label: 'OT Flourish: Hand exercises after stroke',
            url: 'https://www.youtube.com/watch?v=_YwAn2ul8W4'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Medication Routine Reminder',
          description:
            'Use a pill organizer and phone alarm to take blood thinners or blood pressure pills on time.',
          metric: 'Record days with no missed doses.',
          evidence: 'American Heart Association – Medication Adherence (2021).',
          sourceUrl: 'https://www.heart.org/en/health-topics/stroke/life-after-stroke',
          media: null
        },
        {
          title: 'Balance Practice',
          description:
            'Stand near a counter, hold lightly, and shift weight side to side for 1 minute to improve stability.',
          metric: 'Count balance practice sessions.',
          evidence: 'Physiotherapy Research International – Balance Training Post-Stroke (2019).',
          sourceUrl: 'https://onlinelibrary.wiley.com/journal/14710395',
          media: null
        }
      ]
    }
  },
  {
    id: 'anxiety',
    name: 'Anxiety Disorders',
    summary:
      'Anxiety can show up as constant worry, restlessness, or physical symptoms like fast heartbeat. Lifestyle strategies calm the nervous system.',
    motivation:
      'Daily grounding techniques reduce worry and improve focus for work, school, and family life.',
    prevalence: 'Over 300 million people live with anxiety disorders.',
    warningSigns: [
      'Persistent worry, sleep problems, difficulty concentrating.',
      'Physical signs include rapid heartbeat, sweating, or stomach upset.'
    ],
    doctorContact: [
      'Speak with a clinician if anxiety interferes with daily tasks or relationships.',
      'Seek emergency support for panic attacks that include chest pain or trouble breathing.'
    ],
    categories: {
      diet: [
        {
          title: 'Steady Blood Sugar Snacks',
          description:
            'Combine protein and fiber, such as apple slices with peanut butter, to avoid crashes that mimic anxiety.',
          serving: 'One balanced snack between meals.',
          metric: 'Track balanced snacks per day.',
          evidence: 'Nutrients Journal – Nutrition and Anxiety Review (2020).',
          sourceUrl: 'https://www.mdpi.com/2072-6643/12/8/2448',
          media: null
        },
        {
          title: 'Limit Caffeine',
          description:
            'Swap extra coffee or energy drinks for herbal tea to reduce jitters.',
          serving: 'Keep caffeine under 200 mg per day (about two small cups).',
          metric: 'Record caffeinated drinks consumed.',
          evidence: 'Harvard T.H. Chan School – Caffeine and Anxiety (2022).',
          sourceUrl: 'https://www.hsph.harvard.edu/nutritionsource/caffeine/',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Grounding Stretch Flow',
          description:
            'Combine slow neck rolls, shoulder shrugs, and forward folds while breathing deeply.',
          duration: '10 minutes morning and evening.',
          metric: 'Log grounding stretch sessions.',
          evidence: 'Anxiety and Depression Association of America – Exercise for Anxiety (2023).',
          sourceUrl: 'https://adaa.org/understanding-anxiety/exercise-stress-and-anxiety',
          media: {
            type: 'video',
            label: 'Headspace: 10-minute tension release stretch',
            url: 'https://www.youtube.com/watch?v=udZOBGg_JGM'
          }
        },
        {
          title: 'Aerobic Boost',
          description:
            'Do light jogging in place, dancing, or cycling to release endorphins.',
          duration: '25 minutes, 3–4 times per week.',
          metric: 'Track aerobic sessions per week.',
          evidence: 'Journal of Clinical Psychiatry – Aerobic Exercise for Anxiety (2019).',
          sourceUrl: 'https://www.psychiatrist.com',
          media: {
            type: 'video',
            label: 'POPSUGAR Fitness: 20-minute feel-good cardio',
            url: 'https://www.youtube.com/watch?v=QpmD-6Fg94E'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Box Breathing',
          description:
            'Inhale for 4 counts, hold 4, exhale 4, hold 4. Repeat four rounds when worry spikes.',
          metric: 'Record breathing exercises per day.',
          evidence: 'Journal of Human Stress – Controlled Breathing and Anxiety (2017).',
          sourceUrl: 'https://www.tandfonline.com',
          media: {
            type: 'video',
            label: 'VA Whole Health: Box breathing demo',
            url: 'https://www.youtube.com/watch?v=FJJazKtH_9I'
          }
        },
        {
          title: 'Media Curfew',
          description:
            'Limit news and social media one hour before bed to give the mind time to wind down.',
          metric: 'Track evenings with a media-free wind-down.',
          evidence: 'Sleep Medicine Reviews – Screen Time and Anxiety (2021).',
          sourceUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S1087079221001464',
          media: null
        }
      ]
    }
  },
  {
    id: 'low-back-pain',
    name: 'Chronic Low Back Pain',
    summary:
      'Low back pain often stems from weak core muscles, poor posture, or repetitive strain. Active self-care prevents flare-ups.',
    motivation:
      'Stronger core muscles mean less pain, easier lifting, and fewer clinic visits.',
    prevalence: 'Over 600 million people live with chronic low back pain.',
    warningSigns: [
      'Persistent aching or stiffness along the spine, especially after sitting or standing.',
      'Sharp pain in the lower back that may radiate to the leg.'
    ],
    doctorContact: [
      'See a clinician if pain lasts more than six weeks or includes numbness.',
      'Seek emergency help for loss of bladder or bowel control or sudden weakness.'
    ],
    categories: {
      diet: [
        {
          title: 'Hydrating Anti-Inflammatory Foods',
          description:
            'Eat leafy greens, berries, nuts, and seeds to reduce inflammation affecting discs and muscles.',
          serving: '2 cups leafy greens and a handful of nuts daily.',
          metric: 'Track anti-inflammatory servings per day.',
          evidence: 'Nutrients Journal – Diet and Musculoskeletal Pain (2021).',
          sourceUrl: 'https://www.mdpi.com/2072-6643/13/1/150',
          media: null
        },
        {
          title: 'Stay Hydrated',
          description:
            'Drink water steadily to keep spinal discs cushioned.',
          serving: '6–8 cups daily unless medically restricted.',
          metric: 'Log cups of water per day.',
          evidence: 'Spine Health Journal – Hydration and Back Pain (2019).',
          sourceUrl: 'https://www.spine-health.com',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Core Bracing Basics',
          description:
            'Practice pelvic tilts, dead bugs, and bird-dog exercises to strengthen deep abdominal muscles.',
          duration: '10–15 minutes, 4 days per week.',
          metric: 'Record core sessions per week.',
          evidence: 'Journal of Orthopaedic & Sports Physical Therapy – Core Stability (2021).',
          sourceUrl: 'https://www.jospt.org',
          media: {
            type: 'video',
            label: 'Bob & Brad: Core exercises for low back pain',
            url: 'https://www.youtube.com/watch?v=Uo1mlH3GNyM'
          }
        },
        {
          title: 'Daily Stretch Micro-Breaks',
          description:
            'Every hour, stand, roll shoulders, and stretch hamstrings to prevent stiffness.',
          duration: '3 minutes each hour.',
          metric: 'Count stretch breaks per day.',
          evidence: 'Occupational Health Review – Microbreaks for Low Back Pain (2020).',
          sourceUrl: 'https://academic.oup.com/occmed/article/70/5/321/5831430',
          media: null
        }
      ],
      lifestyle: [
        {
          title: 'Posture Reset',
          description:
            'Set phone alarms to check posture: shoulders relaxed, ears aligned with shoulders, feet flat.',
          metric: 'Track posture checks per day.',
          evidence: 'Ergonomics Journal – Posture and Back Pain (2018).',
          sourceUrl: 'https://www.tandfonline.com/toc/terg20/current',
          media: null
        },
        {
          title: 'Sleep Surface Check',
          description:
            'Use a medium-firm mattress and pillow that keeps the spine neutral. Place a pillow between knees if side sleeping.',
          metric: 'Note nights with comfortable sleep setup.',
          evidence: 'Journal of Chiropractic Medicine – Mattress Firmness and Back Pain (2021).',
          sourceUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8456571/',
          media: null
        }
      ]
    }
  },
  {
    id: 'ckd',
    name: 'Chronic Kidney Disease',
    summary:
      'CKD reduces the kidneys’ ability to filter waste. Managing blood pressure, blood sugar, and diet delays progression.',
    motivation:
      'Protecting your kidneys keeps energy high and prevents dialysis or transplant.',
    prevalence: 'An estimated 700 million people live with CKD worldwide.',
    warningSigns: [
      'Often silent; may cause swelling in legs, fatigue, or foamy urine.',
      'Stages progress slowly, so regular lab tests are vital.'
    ],
    doctorContact: [
      'Follow nephrologist guidance for labs and medications.',
      'Seek medical care for sudden weight gain, severe vomiting, or decreased urine output.'
    ],
    categories: {
      diet: [
        {
          title: 'Control Sodium and Phosphorus',
          description:
            'Limit processed meats, canned soups, and colas to protect kidney function.',
          serving: 'Keep sodium under 2,000 mg and choose phosphate-free drinks.',
          metric: 'Track high-sodium foods avoided per day.',
          evidence: 'National Kidney Foundation – CKD Diet (2023).',
          sourceUrl: 'https://www.kidney.org/nutrition',
          media: null
        },
        {
          title: 'Choose Kidney-Friendly Proteins',
          description:
            'Use plant proteins like beans and tofu, balancing with clinician guidance on portions.',
          serving: '0.6–0.8 grams of protein per kg body weight (per provider advice).',
          metric: 'Record daily protein portions.',
          evidence: 'Kidney Disease: Improving Global Outcomes (KDIGO) – Nutrition Guideline (2020).',
          sourceUrl: 'https://kdigo.org',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Gentle Cycling or Walking',
          description:
            'Low-impact cardio supports blood pressure control and kidney health.',
          duration: '30 minutes moderate activity, 5 days per week.',
          metric: 'Log cardio minutes each day.',
          evidence: 'Clinical Journal of the American Society of Nephrology – Exercise and CKD (2021).',
          sourceUrl: 'https://jasn.asnjournals.org',
          media: {
            type: 'video',
            label: 'Kidney Foundation: Low-impact workout',
            url: 'https://www.youtube.com/watch?v=k8JwMa_xXJw'
          }
        },
        {
          title: 'Strength with Light Weights',
          description:
            'Use light dumbbells or resistance bands for curls, presses, and leg extensions to maintain muscle.',
          duration: '2 sets of 12 reps, twice per week.',
          metric: 'Track strength sessions per week.',
          evidence: 'American Kidney Fund – Exercise Tips (2022).',
          sourceUrl: 'https://www.kidneyfund.org',
          media: null
        }
      ],
      lifestyle: [
        {
          title: 'Blood Pressure and Glucose Log',
          description:
            'Monitor blood pressure and blood sugar (if diabetic) and share logs with your care team.',
          metric: 'Record readings daily.',
          evidence: 'KDIGO – Blood Pressure Management in CKD (2021).',
          sourceUrl: 'https://kdigo.org',
          media: null
        },
        {
          title: 'Medication Checklist',
          description:
            'Avoid over-the-counter NSAIDs unless approved. Keep a list of all medications and supplements.',
          metric: 'Weekly review of medication list.',
          evidence: 'National Kidney Foundation – Medicine Safety (2022).',
          sourceUrl: 'https://www.kidney.org',
          media: null
        }
      ]
    }
  },
  {
    id: 'dementia',
    name: 'Alzheimer’s Disease and Other Dementias',
    summary:
      'Dementia affects memory, thinking, and daily functioning. Structured routines, cognitive activities, and caregiver support slow decline.',
    motivation:
      'Consistent cues and brain-friendly habits preserve independence longer.',
    prevalence: 'Over 55 million people live with dementia worldwide.',
    warningSigns: [
      'Short-term memory loss, confusion, difficulty completing familiar tasks.',
      'Changes in mood, personality, or withdrawal from social activities.'
    ],
    doctorContact: [
      'Consult clinicians for cognitive assessments and medication review.',
      'Seek urgent help for wandering, falls, or sudden behavior changes.'
    ],
    categories: {
      diet: [
        {
          title: 'MIND Diet Focus',
          description:
            'Prioritize leafy greens, berries, nuts, beans, whole grains, and olive oil with limited red meat and sweets.',
          serving: '6+ servings of leafy greens per week and berries twice weekly.',
          metric: 'Track MIND-compliant meals.',
          evidence: 'Alzheimer’s & Dementia Journal – MIND Diet Study (2015, updated 2022).',
          sourceUrl: 'https://alz-journals.onlinelibrary.wiley.com',
          media: null
        },
        {
          title: 'Stay Hydrated',
          description:
            'Offer water-rich foods and scheduled drinks to prevent confusion from dehydration.',
          serving: '6–8 cups of fluids per day unless limited by clinician.',
          metric: 'Log fluid intake.',
          evidence: 'Alzheimer’s Society – Hydration Tips (2023).',
          sourceUrl: 'https://www.alzheimers.org.uk',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Chair Aerobics with Music',
          description:
            'Combine seated marching, clapping, and arm movements with familiar songs to boost mood and circulation.',
          duration: '15 minutes daily.',
          metric: 'Record chair aerobics sessions.',
          evidence: 'Journal of Alzheimer’s Disease – Exercise Interventions (2020).',
          sourceUrl: 'https://www.j-alz.com',
          media: {
            type: 'video',
            label: 'Go4Life/NIA: Chair exercise routine',
            url: 'https://www.youtube.com/watch?v=Ev6yE55kYGw'
          }
        },
        {
          title: 'Dual-Task Walks',
          description:
            'Walk slowly while naming categories (fruits, animals) to engage body and mind.',
          duration: '10 minutes, 3–4 times weekly.',
          metric: 'Track dual-task walks.',
          evidence: 'Geriatrics & Gerontology International – Dual Task Training (2019).',
          sourceUrl: 'https://onlinelibrary.wiley.com/journal/14470594',
          media: null
        }
      ],
      lifestyle: [
        {
          title: 'Daily Orientation Board',
          description:
            'Display date, weather, and daily plan on a whiteboard to reduce confusion.',
          metric: 'Update orientation board each morning.',
          evidence: 'Alzheimer’s Association – Daily Care Tips (2023).',
          sourceUrl: 'https://www.alz.org/help-support/caregiving/daily-care',
          media: null
        },
        {
          title: 'Caregiver Respite Plan',
          description:
            'Schedule regular breaks for caregivers using community programs or family support.',
          metric: 'Log respite hours per week.',
          evidence: 'Journal of Applied Gerontology – Respite Benefits (2021).',
          sourceUrl: 'https://journals.sagepub.com/home/jag',
          media: null
        }
      ]
    }
  },
  {
    id: 'migraine',
    name: 'Migraine',
    summary:
      'Migraine causes severe head pain, light sensitivity, and nausea. Identifying triggers and practicing calming routines reduce attacks.',
    motivation:
      'Consistent self-care decreases sick days and improves focus for work and family.',
    prevalence: 'Over 1 billion people experience migraine attacks.',
    warningSigns: [
      'Throbbing head pain, aura, nausea, or visual changes.',
      'Often triggered by lack of sleep, certain foods, or stress.'
    ],
    doctorContact: [
      'Consult a clinician if headaches increase in frequency or intensity.',
      'Seek immediate care for sudden “worst-ever” headache or neurological deficits.'
    ],
    categories: {
      diet: [
        {
          title: 'Regular Meal Timing',
          description:
            'Eat balanced meals every 4 hours to prevent low blood sugar triggers.',
          serving: '3 meals and 1–2 snacks daily.',
          metric: 'Log on-time meals.',
          evidence: 'American Migraine Foundation – Nutrition Tips (2023).',
          sourceUrl: 'https://americanmigrainefoundation.org',
          media: null
        },
        {
          title: 'Hydration Habit',
          description:
            'Drink water steadily; dehydration is a common trigger.',
          serving: 'Drink a glass of water every 2 hours while awake.',
          metric: 'Track glasses of water consumed.',
          evidence: 'Journal of Clinical Neuroscience – Hydration and Migraine (2020).',
          sourceUrl: 'https://www.sciencedirect.com/science/article/pii/S0967586820300992',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Subtle Cardio',
          description:
            'Engage in low-intensity exercise such as gentle cycling or swimming to reduce migraine frequency.',
          duration: '30 minutes, 3 times per week.',
          metric: 'Record cardio workouts.',
          evidence: 'Scandinavian Journal of Medicine & Science in Sports – Exercise and Migraine (2018).',
          sourceUrl: 'https://onlinelibrary.wiley.com/journal/16000838',
          media: {
            type: 'video',
            label: 'Physiotherapy with Brains: Low-impact cardio for migraine',
            url: 'https://www.youtube.com/watch?v=9z5oK5l3t7s'
          }
        },
        {
          title: 'Neck and Shoulder Release',
          description:
            'Perform neck stretches, chin tucks, and shoulder blade squeezes to reduce tension.',
          duration: '5-minute routine twice daily.',
          metric: 'Track neck stretch sessions.',
          evidence: 'Headache Journal – Cervical Exercises (2021).',
          sourceUrl: 'https://headachejournal.onlinelibrary.wiley.com',
          media: {
            type: 'video',
            label: 'Yoga with Adriene: Neck & shoulder relief',
            url: 'https://www.youtube.com/watch?v=X3-gKPNyrTA'
          }
        }
      ],
      lifestyle: [
        {
          title: 'Migraine Trigger Journal',
          description:
            'Note foods, sleep, weather, and stress levels when headaches occur to identify patterns.',
          metric: 'Daily trigger journal entries.',
          evidence: 'American Headache Society – Headache Diary (2022).',
          sourceUrl: 'https://americanheadachesociety.org',
          media: null
        },
        {
          title: 'Consistent Bedtime Routine',
          description:
            'Dim lights, stretch, and avoid screens 1 hour before bed to stabilize sleep.',
          metric: 'Log migraine-friendly bedtime routines.',
          evidence: 'Sleep Health Journal – Sleep Hygiene and Migraine (2020).',
          sourceUrl: 'https://www.sleephealthjournal.org/article/S2352-7218(20)30060-8/fulltext',
          media: null
        }
      ]
    }
  },
  {
    id: 'anemia',
    name: 'Iron-Deficiency Anemia',
    summary:
      'Iron-deficiency anemia reduces red blood cells, causing fatigue and weakness. Iron-rich foods and vitamin C improve iron levels.',
    motivation:
      'Rebuilding iron stores boosts energy and mental focus, helping daily work.',
    prevalence: 'Affects roughly 1.2 billion people worldwide, especially women and children.',
    warningSigns: [
      'Fatigue, pale skin, cold hands, shortness of breath with mild exertion.',
      'Brittle nails or hair loss may occur.'
    ],
    doctorContact: [
      'Work with a clinician to confirm deficiency and dosage for supplements.',
      'Seek urgent care for chest pain or fainting.'
    ],
    categories: {
      diet: [
        {
          title: 'Iron + Vitamin C Pairings',
          description:
            'Combine iron-rich foods (lean red meat, lentils, spinach) with vitamin C sources (citrus, tomatoes) to boost absorption.',
          serving: 'Include one iron-rich food and one vitamin C food at each meal.',
          metric: 'Track iron-rich meals per day.',
          evidence: 'World Health Organization – Iron Deficiency Anaemia (2023).',
          sourceUrl: 'https://www.who.int/health-topics/anaemia',
          media: null
        },
        {
          title: 'Cook with Cast Iron',
          description:
            'Cooking acidic foods in cast iron pans increases iron content of meals.',
          serving: 'Use cast iron cookware several times per week.',
          metric: 'Record meals made in cast iron.',
          evidence: 'Journal of the American Dietetic Association – Iron from Cookware (2001).',
          sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/11478471/',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Energy-Building Walks',
          description:
            'Start with short walks and gradually increase pace as iron levels improve.',
          duration: '10–20 minutes daily as tolerated.',
          metric: 'Log walking minutes per day.',
          evidence: 'Clinical Nutrition – Physical Activity in Anemia Recovery (2019).',
          sourceUrl: 'https://www.sciencedirect.com/journal/clinical-nutrition',
          media: null
        },
        {
          title: 'Light Strength Training',
          description:
            'Use bodyweight squats and wall push-ups to build muscular endurance without overexertion.',
          duration: '2 sets of 10 reps, 2–3 times per week.',
          metric: 'Track strength sessions per week.',
          evidence: 'Journal of Sports Medicine – Exercise and Anemia (2018).',
          sourceUrl: 'https://www.hindawi.com/journals/bmri/2018/7126130/',
          media: null
        }
      ],
      lifestyle: [
        {
          title: 'Supplement Tracker',
          description:
            'Take prescribed iron supplements on an empty stomach with vitamin C, and record doses to avoid missed days.',
          metric: 'Record supplement doses.',
          evidence: 'Centers for Disease Control and Prevention – Iron Supplement Guidance (2022).',
          sourceUrl: 'https://www.cdc.gov/nutrition/index.html',
          media: null
        },
        {
          title: 'Rest and Recovery Windows',
          description:
            'Plan short rest breaks during the day to manage fatigue until iron levels normalize.',
          metric: 'Track scheduled rest breaks.',
          evidence: 'British Society of Haematology – Anemia Management (2021).',
          sourceUrl: 'https://b-s-h.org.uk',
          media: null
        }
      ]
    }
  },
  {
    id: 'hypothyroidism',
    name: 'Hypothyroidism',
    summary:
      'Underactive thyroid slows metabolism, causing fatigue, weight gain, and cold intolerance. Medication plus lifestyle habits restore balance.',
    motivation:
      'Daily routines support medication effectiveness and maintain steady energy.',
    prevalence: 'Affects an estimated 5% of the population worldwide.',
    warningSigns: [
      'Fatigue, dry skin, constipation, sensitivity to cold, weight gain.',
      'In women, may cause heavy menstrual cycles.'
    ],
    doctorContact: [
      'Regularly monitor thyroid hormone levels with a healthcare provider.',
      'Seek care for chest pain, severe fatigue, or swelling.'
    ],
    categories: {
      diet: [
        {
          title: 'Morning Thyroid Medication Routine',
          description:
            'Take levothyroxine on an empty stomach with water, wait 30–60 minutes before eating.',
          serving: 'Once daily as prescribed.',
          metric: 'Track medication timing success.',
          evidence: 'American Thyroid Association – Medication Timing (2022).',
          sourceUrl: 'https://www.thyroid.org/patient-thyroid-information/',
          media: null
        },
        {
          title: 'Selenium and Iodine Balance',
          description:
            'Include Brazil nuts, seafood, and iodized salt in moderation to support thyroid hormone production.',
          serving: '1–2 Brazil nuts daily; use iodized salt sparingly.',
          metric: 'Log selenium-rich food intake.',
          evidence: 'Endocrine Society – Micronutrients for Thyroid (2021).',
          sourceUrl: 'https://www.endocrine.org',
          media: null
        }
      ],
      exercise: [
        {
          title: 'Metabolism Boost Walk',
          description:
            'Brisk walking raises heart rate and combats fatigue.',
          duration: '25–30 minutes, 5 days per week.',
          metric: 'Record walking sessions.',
          evidence: 'Thyroid Research Journal – Exercise and Hypothyroidism (2020).',
          sourceUrl: 'https://thyroidresearchjournal.biomedcentral.com',
          media: {
            type: 'video',
            label: 'Walk at Home: 1-mile happy walk',
            url: 'https://www.youtube.com/watch?v=0LK8W_fgfWY'
          }
        },
        {
          title: 'Lubricating Stretch Routine',
          description:
            'Gentle stretching reduces joint stiffness often associated with hypothyroidism.',
          duration: '10 minutes daily.',
          metric: 'Track stretch sessions.',
          evidence: 'Journal of Physical Therapy Science – Flexibility and Thyroid (2019).',
          sourceUrl: 'https://www.jstage.jst.go.jp/article/jpts/31/2/31_jpts-2018-387/_article',
          media: null
        }
      ],
      lifestyle: [
        {
          title: 'Energy Budget Planner',
          description:
            'Plan demanding tasks during peak energy times and allow recovery breaks.',
          metric: 'Log daily energy planning success.',
          evidence: 'Thyroid Foundation – Living Well with Hypothyroidism (2022).',
          sourceUrl: 'https://www.thyroid.org/patient-thyroid-information/',
          media: null
        },
        {
          title: 'Temperature Comfort Kit',
          description:
            'Keep layered clothing and warm drinks handy to manage cold sensitivity.',
          metric: 'Track days you stay comfortable without excessive fatigue.',
          evidence: 'British Thyroid Foundation – Lifestyle Tips (2023).',
          sourceUrl: 'https://www.btf-thyroid.org',
          media: null
        }
      ]
    }
  }
]

export const getDiseaseById = (id) => diseases.find((item) => item.id === id)
