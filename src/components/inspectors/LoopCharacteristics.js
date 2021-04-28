import LoopCharactetistics from '@/components/inspectors/LoopCharacteristics.vue';
import NodeInspector from '@/NodeInspector';
import omit from 'lodash/omit';

// eslint-disable-next-line no-unused-vars
export const loopCharacteristicsHandler = function(value, node, setNodeProp, moddle, definitions) {
  
  const nodeInspector = new NodeInspector(definitions);
  const update = nodeInspector.setDefinitionProps(value.$loopCharactetistics, setNodeProp, moddle, {});
  if (update.loopCharacteristics) {
    //node.definition.loopCharacteristics = update.loopCharacteristics;
    delete node.definition.loopCharacteristics;
    setNodeProp(node, 'loopCharacteristics', update.loopCharacteristics);
  } else {
    node.definition.loopCharacteristics = null;
    delete node.definition.loopCharacteristics;
  }
  if (update.ioSpecification) {
    //node.definition.ioSpecification = update.ioSpecification;
    delete node.definition.ioSpecification;
    setNodeProp(node, 'ioSpecification', update.ioSpecification);
  } else {
    //node.definition.ioSpecification = null;
    delete node.definition.ioSpecification;
  }
  return omit(value, ['$loopCharactetistics']);
};

export const loopCharacteristicsData = function(inspectorData, node, defaultDataTransform, { definitions }) {
  const nodeInspector = new NodeInspector(definitions);
  inspectorData.$loopCharactetistics = nodeInspector.getDefinitionProps({
    id: node.definition.id,
    loopCharacteristics: node.definition.loopCharacteristics,
    ioSpecification: node.definition.ioSpecification,
  });
  delete inspectorData.loopCharacteristics;
  delete inspectorData.ioSpecification;
};

export default {
  component: 'FormAccordion',
  container: true,
  config: {
    initiallyOpen: false,
    label: 'Loop Characteristics',
    icon: 'bars',
    name: 'loop-characteristics-accordion',
  },
  items: [
    {
      component: LoopCharactetistics,
      name: 'LoopCharactetistics',
      config: {
        name: '$loopCharactetistics',
      },
    },
  ],
};
