/* eslint-disable max-len */
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('equipments', [{
      equipmentName: 'Dumbbell',
    }, {
      equipmentName: 'Barbell',
    }, {
      equipmentName: 'Cable',
    }, {
      equipmentName: 'Machine',
    }])

    await queryInterface.bulkInsert('workouts', [
      {
        workoutName: 'One Arm Row',
        description: 'While having one Dumbbell in one hand, place the opposite leg and knell , then extend arm out and hold out and keep your back straight. Lower dumbbell to side and row it as if starting lawnmower, keep elbows tucked in.',
        equipmentId: 1,
      }, {
        workoutName: 'Shrugs',
        description: 'Hold two dumbbells to each side of the body and while squeezing your back, use shoulders to',
        equipmentId: 1,
      }, {
        workoutName: 'Bent Over Row',
        description: 'Hold barbell in front of you and slowly bring barbell down and keep your body to a 30-45 degree angle from standing, row barbell towards body while squeezing back and keeping your core tight.',
        equipmentId: 2,
      }, {
        workoutName: 'Deadlift',
        description: 'Place barbell on the ground, stand with feet shoulder-width apart, grab bar with your hands just outside your legs, Lift bar by driving your hips forwards, keeping a flat back. Lower bar under control',
        equipmentId: 2,
      }, {
        workoutName: 'Seated Pulldown',
        description: 'Using a cable machine that is seated, grab bar from above head and bring back to a 30 degree angle from machine and bring bar to chest while squeezing back while pulling, being back bar back under control.',
        equipmentId: 3,
      }, {
        workoutName: 'Row',
        description: 'Using a cable row machine, grab V shape handel and while keeping your back straight row cable into your stomach while squeezing back and have a tight core to keep back straight.',
        equipmentId: 3,
      }, {
        workoutName: 'Dumbbell Chest Fly',
        description: 'Place bench at a 45 degree angle, lower the weights in an arc out to the sides as far as comfortable, Using your pec muscles to bring dumbbell in front of your chest, slowly return to starting position.',
        equipmentId: 1,
      }, {
        workoutName: 'Bench Press',
        description: 'Lay down on bench and place hand where your forearms are perpendicular to the ground, and keeping your foot flat on the floor and push using the heels of your foot, while pushing squeeze glutes and keep abs tight to keep your back arch a little to engage with your chest. Bring barbell to the middle of your chest while and keeping elbows at a 45 degree angle, using an explosive push to bring barbell to starting position.',
        equipmentId: 2,
      }, {
        workoutName: 'Incline Barbell Bench',
        description: 'Using the same techniques as the bench press but having seat 30-40 degree angle',
        equipmentId: 2,
      }, {
        workoutName: 'Squat',
        description: 'Keep legs a little wider than shoulder-width apart, roll shoulder back and down away from ears, extend arms out straight parallel to the floor and grab bar, place barbell on your back ,NOT YOUR SHOULDERS, and unrack bar, begin by inhaling and unlocking your hips brining them back slightly, while your glutes start to stick out make sure chest and shoulders stay upright and back stays straight. Goal is to bring glutes as low as you can comfortably go. Engage core and push through the heels of your feet until you get to starting position',
        equipmentId: 2,
      }, {
        workoutName: 'Standing Calf Raise',
        description: 'Set barbell into a squat position, using a slightly elevated surface (Using weighted plates will work), place the top of your foot onto the weight and raise your heels slowly keeping knees extended but not locked. Pause for one second when your standing as much on the tips of your toe as your can, slowly bring heels back to starting position. ',
        equipmentId: 2,
      }, {
        workoutName: 'Leg Curls',
        description: 'Using a leg curl machine, curl machine towards body slowly, pause at the bottom and bring back to starting position slowly.',
        equipmentId: 4,
      }, {
        workoutName: 'Close Grip',
        description: 'Get in the same set up as a regular bench press, only difference is the placement of your hands, you want to extend your arms out and grab the bar with both hands very close to the center of the bar. You should feel your tricep doing most of the work rather than your chest',
        equipmentId: 2,
      }, {
        workoutName: 'Rope pull downs',
        description: 'At the cable machine, place the duel rope at the highest point available, after brace your abs and tuck your elbows in at your side, push down until your arms extend out.',
        equipmentId: 3,
      }, {
        workoutName: 'Dips',
        description: 'At the dip rack, prop yourself up and keep torso perpendicular to ground, cross your knees and lower your body until your shoulders joints are below your knees, keep in mind to maintain your form through the workout, push back to starting position.',
        equipmentId: 4,
      }, {
        workoutName: 'Barbell Curl',
        description: 'Grab a barbell (if it`s available to you, use an ez-barbell to take more pressure off your wrist.',
        equipmentId: 1,
      }, {
        workoutName: 'Dumbbell Hammer Curl',
        description: 'Stand with your feet feet hip width apart. Hold dumbbell at each side. Curl dumbbell straight up, without twisting the dumbbell. Take a pause at the end of the curl and bring down in control motion.',
        equipmentId: 1,
      }, {
        workoutName: 'Cable Curl',
        description: 'Go to the cable machine and place it to the lowest position available. Grab the bar attachment and use that or ropes if you want to feel a bigger burn. Grab bar with your arms extended and hands shoulder-width apart, palms facing away from you. Keep elbows tucked in and keep abs tight as you curl it towards your shoulders. Pause at then end and bring it back in a control motion.',
        equipmentId: 3,
      }, {
        workoutName: 'Lateral Raise',
        description: 'Place dumbbells to the side of you and bring arms up to a 90 degree angle, pause at the top and bring down in a control motion.',
        equipmentId: 1,
      }, {
        workoutName: 'Overhead Press',
        description: 'Stand with your feet shoulder width apart, Lift a barbell to shoulder level and perform an overhead shoulder press by raising the barbell over your head. Hold the weight at the top and before bringing it down in control motion.',
        equipmentId: 1,
      }])



    await queryInterface.bulkInsert('bodyParts', [{
      body: 'Back',
    }, {
      body: 'Chest',
    }, {
      body: 'Legs',
    }, {
      body: 'Shoulders',
    }, {
      body: 'Tricep',
    }, {
      body: 'Bicep',
    }
    ])

    return queryInterface.bulkInsert('workoutsBodyParts', [{
      workOutId: 1,
      bodyPartId: 1,
    },
    {
      workOutId: 1,
      bodyPartId: 6,
    },
    {
      workOutId: 2,
      bodyPartId: 1,
    },
    {
      workOutId: 2,
      bodyPartId: 4,
    },
    {
      workOutId: 3,
      bodyPartId: 1,
    },
    {
      workOutId: 3,
      bodyPartId: 6,
    },
    {
      workOutId: 4,
      bodyPartId: 1,
    },
    {
      workOutId: 4,
      bodyPartId: 3,
    },
    {
      workOutId: 5,
      bodyPartId: 1,
    },
    {
      workOutId: 5,
      bodyPartId: 6,
    },
    {
      workOutId: 6,
      bodyPartId: 1,
    },
    {
      workOutId: 6,
      bodyPartId: 6,
    },
    {
      workOutId: 7,
      bodyPartId: 2,
    },
    {
      workOutId: 8,
      bodyPartId: 2,
    },
    {
      workOutId: 8,
      bodyPartId: 5,
    },
    {
      workOutId: 9,
      bodyPartId: 3,
    },
    {
      workOutId: 10,
      bodyPartId: 3,
    },
    {
      workOutId: 11,
      bodyPartId: 3,
    },
    {
      workOutId: 12,
      bodyPartId: 5,
    },
    {
      workOutId: 13,
      bodyPartId: 5,
    },
    {
      workOutId: 14,
      bodyPartId: 5,
    },
    {
      workOutId: 15,
      bodyPartId: 2,
    },
    {
      workOutId: 15,
      bodyPartId: 5,
    },
    {
      workOutId: 16,
      bodyPartId: 6,
    },
    {
      workOutId: 17,
      bodyPartId: 6,
    },
    {
      workOutId: 18,
      bodyPartId: 6,
    },
    {
      workOutId: 19,
      bodyPartId: 4,
    },
    {
      workOutId: 20,
      bodyPartId: 4,
    }])
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('workouts')
    await queryInterface.bulkDelete('equipment')
    await queryInterface.bulkDelete('bodyParts')

    return queryInterface.bulkDelete('workoutsBodyParts')
  }
}
