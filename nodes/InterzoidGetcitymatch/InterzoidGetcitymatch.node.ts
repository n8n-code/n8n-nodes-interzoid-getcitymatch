import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { cityNameSimilarityKeyDescription } from './resources/city-name-similarity-key';

export class InterzoidGetcitymatch implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Interzoid Getcitymatch',
                name: 'N8nDevInterzoidGetcitymatch',
                icon: { light: 'file:./interzoid-getcitymatch.png', dark: 'file:./interzoid-getcitymatch.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API provides similarity key for city name deduplication, fuzzy matching, and dataset merging.',
                defaults: { name: 'Interzoid Getcitymatch' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevInterzoidGetcitymatchApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "City Name Similarity Key",
					"value": "City Name Similarity Key",
					"description": ""
				}
			],
			"default": ""
		},
		...cityNameSimilarityKeyDescription
                ],
        };
}
