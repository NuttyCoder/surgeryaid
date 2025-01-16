const Alexa = require('ask-sdk-core');

// Medication reminder intent handler
const MedicationIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'MedicationIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'It’s time to take your medication. Please take your painkiller now.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

// Exercise log intent handler
const ExerciseIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'ExerciseIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Great job on completing your exercise! Keep up the good work.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

// Meal plan intent handler
const MealPlanIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'MealPlanIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'For today, I suggest a healthy, anti-inflammatory salad with avocados and chickpeas for lunch.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

// Breathing reminder intent handler
const BreathingIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'BreathingIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'It’s time for a deep breathing session. Take a deep breath in... and out...';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

// Skill's main handler
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    MedicationIntentHandler,
    ExerciseIntentHandler,
    MealPlanIntentHandler,
    BreathingIntentHandler
  )
  .lambda();
