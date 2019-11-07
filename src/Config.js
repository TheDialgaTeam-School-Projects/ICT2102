export const Config = {
  useInternalCache: false,
  clearInternalCache: false,
  uploadToFirebase: false,
  staffInformation: {
    staffId: 'test',
    staffName: 'Yong Jian Ming',
    staffPassword: 'test',
  },
  patientInformation: {
    patientId: 'PA001',
    patientName: 'Mr Boon',
    patientConditions: ['Diabetes', 'Fall Prone'],
    patientReminders: [
      {
        dateTime: 1572273647,
        description: "Doctor's Appointment",
      },
      {
        dateTime: 1572273647,
        description: 'Operation',
      },
    ],
  },
  firebase: {
    patientsTest: [
      {
        patientId: 'PA001',
        patientName: 'Mr Boon',
        patientAddress: [
          'Blk 39 Geylang Lorong 14',
          '#08-48',
          'Singapore 650039',
        ],
        patientEmergencyContact: 91230056,
        patientConditions: ['Diabetes', 'Fall Prone'],
        patientReminders: [
          {
            dateTime: 1572584400,
            description: "Doctor's  Appointment",
          },
          {
            dateTime: 1572573402,
            description: 'Test',
          },
        ],
        patientMedicines: [
          'Insulin Jab - 3 times a day (before meals)',
          'Panadol - 2 tablets a day (1 in day & 1 at night)',
        ],
        patientCaseNotes: {
          Assessment: [{Date: 1571616000, Desc: 'Ass'}],
          Objective: [{Date: 1571616000, Desc: 'Patient has headache'}],
          Plan: [{Date: 1571616000, Desc: 'Pla'}],
          Subjective: [
            {
              Date: 1571616000,
              Desc:
                'Patient suffered a cardiac arrest and concussion to the head at about 0915 hours at his home. Paramedics arrived on the scene at about 0925 hours. Patient was found lying on the floor. An AED was used to revive the patient as no heartbeat was found by the paramedics. Patient was brought into the ambulance and admitted into the emergency ward. Patient has a history of diabetes and is fall prone.',
            },
          ],
        },
        patientVitals: [
          {dateTime: 1572592515, dia: 22, pulse: 33, sys: 11, temp: 35},
          {dateTime: 1572592515, dia: 22, pulse: 44, sys: 222, temp: 90},
        ],
      },
    ],
    staffsTest: [
      {
        staffId: 'jianmingyong',
        staffPassword: 'password',
        staffName: 'Yong Jian Ming',
      },
      {staffId: 'test', staffPassword: 'test', staffName: 'Test User'},
    ],
  },
};
