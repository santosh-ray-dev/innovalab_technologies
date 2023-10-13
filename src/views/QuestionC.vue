<template>
  <form
    @submit.prevent="submitForm"
    class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-5"
  >
    <div v-for="block in blocks" :key="block.token">
      <div class="mb-4">
        <label :for="block.token" class="block text-gray-700">
          {{ block.props.title }}
          <span v-if="block.props.required" class="text-red-500">*</span>
        </label>
        <template v-if="block.type === 'text'">
          <input
            :id="block.token"
            v-model="formData[block.token]"
            :placeholder="block.props.placeholder"
            :class="[
              'w-full p-2 rounded shadow',
              block.props.required && errors[block.token]
                ? 'border border-red-500'
                : 'border',
            ]"
          />
          <p
            v-if="block.props.required && errors[block.token]"
            class="text-red-500 text-sm"
          >
            {{ errors[block.token] }}
          </p>
        </template>
        <template v-else-if="block.type === 'checkbox'">
          <input
            :id="block.token"
            type="checkbox"
            v-model="formData[block.token]"
          />
        </template>
        <template v-else-if="block.type === 'date'" class="mb-4">
          <input
            :id="block.token"
            type="date"
            v-model="formData[block.token]"
            :class="[
              'w-full p-2 rounded shadow',
              block.props.required && errors[block.token]
                ? 'border border-red-500'
                : 'border',
            ]"
          />
          <p
            v-if="block.props.required && errors[block.token]"
            class="text-red-500 text-sm"
          >
            {{ errors[block.token] }}
          </p>
        </template>
      </div>
    </div>
    <button
      type="submit"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const blocks = [
  {
    token: "PERSON_NAME",
    type: "text",
    props: {
      title: "Enter your name",
      required: true,
      placeholder: "e.g. John Doe",
    },
  },
  {
    token: "IS_PERSON_MINOR",
    type: "checkbox",
    props: {
      title: "Is the current person minor?",
      default: false,
    },
  },
  {
    token: "PERSON_DOB",
    type: "date",
    props: {
      title: "Enter your DOB",
      required: "IS_PERSON_MINOR",
    },
  },
];

const formData = ref({});

const errors = ref({});


//form value default
for (const block of blocks) {
  formData.value[block.token] =
    block.props.default !== undefined ? block.props.default : "";
}

const isFieldValid = (fieldName) => {
  if (blocks.find((block) => block.token === fieldName)) {
    const block = blocks.find((block) => block.token === fieldName);
    if (block.props.required) {
      if (block.type === "checkbox") {
        return formData.value[fieldName] !== undefined;
      } else {
        return formData.value[fieldName] !== "";
      }
    }
  }
  return true;
};

const submitForm = () => {
  for (const block of blocks) {
    if (block.props.required && !isFieldValid(block.token)) {
      errors.value[block.token] = "This field is required.";
    } else {
      errors.value[block.token] = null;
    }

    // Additional validation for age
    if (formData.value["PERSON_DOB"]) {
      const dob = new Date(formData.value["PERSON_DOB"]);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();

      if (formData.value["IS_PERSON_MINOR"] && age >= 18) {
        errors.value["PERSON_DOB"] = "Person must be under 18 years old.";
      } else if (!formData.value["IS_PERSON_MINOR"] && age < 18) {
        errors.value["PERSON_DOB"] = "Person must be 18 years or older.";
      } else {
        errors.value["PERSON_DOB"] = null;
      }
    }
  }

  if (Object.values(errors.value).every((error) => !error)) {
    // Form is valid, you can submit the data here
    console.log("Form data:", formData);
  }
};
</script>
