interface DefinitionProps {
  definition: string;
  example?: string;
}

export default function Definition({ definition, example }: DefinitionProps) {
  return (
    <li className="dark:text-white pl-2 mb-4 sm:text-lg">
      {definition}
      {example && (
        <span className="text-moderate-gray block mt-1">"{example}"</span>
      )}
    </li>
  );
}
