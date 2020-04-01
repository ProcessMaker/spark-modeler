import {
  defaultStartNames,
  defaultEndNames,
  defaultTaskNames,
  defaultGatewayNames,
  defaultIntermediateNames,
} from '@/components/nodes/defaultNames';

function getDefaultNames(node) {
  if (node.isStartEvent()) {
    return defaultStartNames;
  }
  if (node.isTask()) {
    return defaultTaskNames;
  }
  if (node.isGateway()) {
    return defaultGatewayNames;
  }
  if (node.isIntermediateEvent()) {
    return defaultIntermediateNames;
  }
  if (node.isEndEvent()) {
    return defaultEndNames;
  }
  return null;
}

export function keepOriginalName(node) {
  if (!node) {
    return false;
  }
  const defaultNames = getDefaultNames(node);
  return defaultNames ? !Object.values(defaultNames).includes(node.definition.name) : true;
}