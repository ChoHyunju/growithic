import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// 홈페이지 스키마
const homeSchema = {
  type: 'object',
  required: ['title', 'subtitle', 'heroImage', 'cta'],
  properties: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    heroImage: { type: 'string' },
    cta: {
      type: 'object',
      required: ['primary', 'secondary'],
      properties: {
        primary: { type: 'string' },
        secondary: { type: 'string' }
      }
    }
  }
};

// 꿀팁 스키마
const quicktipSchema = {
  type: 'object',
  required: ['title', 'content', 'date', 'link'],
  properties: {
    title: { type: 'string' },
    content: { type: 'string' },
    date: { type: 'string', format: 'date-time' },
    link: { type: 'string' }
  }
};

// 프로젝트 스키마
const projectSchema = {
  type: 'object',
  required: ['title', 'description', 'thumbnail', 'likes', 'link'],
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    thumbnail: { type: 'string' },
    likes: { type: 'number', minimum: 0 },
    link: { type: 'string' }
  }
};

// 스키마 검증 함수
export const validateSchema = (data, schemaType) => {
  let schema;
  switch (schemaType) {
    case 'home':
      schema = homeSchema;
      break;
    case 'quicktip':
      schema = quicktipSchema;
      break;
    case 'project':
      schema = projectSchema;
      break;
    default:
      throw new Error('Unknown schema type');
  }

  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    console.error('Schema validation errors:', validate.errors);
    return false;
  }
  return true;
}; 