import React from "react";
import {
  Button,
  Checkbox,
  Label,
  Text,
  TextInput,
} from "@fabric-msft/fluent-react";
import FormField from "../components/FormField";
import { DatePicker } from "@fluentui/react-datepicker-compat";

import { Dropdown, Option, useId } from "@fluentui/react-components";

const Identity: React.FC = () => {
  const dropdownId = useId("dropdown-default");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
  ];

  return (
    <div>
      <div className="pet-photo">
        <Label required weight="semibold">
          Pet photo
        </Label>
        <div className="upload-container">
          <div className="icon-container">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_61578)">
                <g clip-path="url(#clip1_2_61578)">
                  <circle
                    cx="32"
                    cy="32"
                    r="32"
                    fill="url(#paint0_linear_2_61578)"
                  />
                  <g filter="url(#filter0_ii_2_61578)">
                    <path
                      d="M23.04 22.72C23.04 17.7715 27.0515 13.76 32 13.76C36.9485 13.76 40.96 17.7715 40.96 22.72C40.96 27.6685 36.9485 31.68 32 31.68C27.0515 31.68 23.04 27.6685 23.04 22.72Z"
                      fill="url(#paint1_linear_2_61578)"
                    />
                    <path
                      d="M21.44 33.92C18.24 33.92 16.32 35.84 16.32 38.72C16.32 41.6 18.56 49.92 32 50.08C45.44 50.24 47.68 41.6 47.68 38.72C47.68 35.84 46.08 33.92 42.56 33.92H21.44Z"
                      fill="url(#paint2_linear_2_61578)"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_ii_2_61578"
                  x="16.32"
                  y="13.76"
                  width="31.36"
                  height="37.6022"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.96" />
                  <feGaussianBlur stdDeviation="1.12" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_61578"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.28" />
                  <feGaussianBlur stdDeviation="3.04" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_2_61578"
                    result="effect2_innerShadow_2_61578"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_61578"
                  x1="20.2371"
                  y1="2.07152"
                  x2="46.1036"
                  y2="64.0359"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E0E0E0" stop-opacity="0.2" />
                  <stop offset="1" stop-color="#6B6B6B" stop-opacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_61578"
                  x1="38.7441"
                  y1="13.76"
                  x2="24.7546"
                  y2="52.1987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D1D1D1" />
                  <stop offset="1" stop-color="#B3B0AD" />
                  <stop offset="1" stop-color="#B3B3B3" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_61578"
                  x1="38.7441"
                  y1="13.76"
                  x2="24.7546"
                  y2="52.1987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D1D1D1" />
                  <stop offset="1" stop-color="#B3B0AD" />
                  <stop offset="1" stop-color="#B3B3B3" />
                </linearGradient>
                <clipPath id="clip0_2_61578">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
                <clipPath id="clip1_2_61578">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="upload-button">
            <Button appearance="secondary">Upload a Photo</Button>
            <Text size="200" block>
              <span>Make sure the photo is at least 100x100</span>
            </Text>
          </div>
        </div>
      </div>

      <FormField
        id="first-name-field"
        label="Name"
        required
        warningText="This is a warning"
        errorText="This is an error"
        tooltip="Enter your pet's name"
      >
        <TextInput placeholder="Enter a name" />
      </FormField>
      <FormField
        id="nickname-field"
        label="Nicknames"
        warningText="This is a warning"
        errorText="This is an error"
        tooltip="Enter your pet's nicknames"
      >
        <TextInput placeholder="Enter Nicknames" />
      </FormField>
      <FormField
        id="breed-field"
        label="Breed"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Dropdown aria-labelledby={dropdownId} placeholder="Select an animal">
          {options.map((option) => (
            <Option key={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </FormField>
      <FormField
        id="date-field"
        label="Breed"
        warningText="This is a warning"
        errorText="This is an error"
        tooltip="Select your pet's birthdate"
      >
        <DatePicker placeholder="Select a date..." />
      </FormField>
      <FormField
        warningText="This is a warning"
        label="Primary Pet"
        errorText="This is an error"
      >
        <Checkbox>Make this my primary pet</Checkbox>
      </FormField>
    </div>
  );
};

const Training: React.FC = () => {
  return <div>Training</div>;
};

const Pedigree: React.FC = () => {
  return <div>Pedigree</div>;
};

const Personality: React.FC = () => {
  return <div>Personality</div>;
};

const Default: React.FC = () => {
  return (
    <div>
      <Text>Default</Text>
    </div>
  );
};

export { Identity, Training, Pedigree, Personality, Default };
