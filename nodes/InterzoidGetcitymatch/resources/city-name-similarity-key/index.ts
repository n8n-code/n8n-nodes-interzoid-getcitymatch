import type { INodeProperties } from 'n8n-workflow';

export const cityNameSimilarityKeyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"City Name Similarity Key"
					]
				}
			},
			"options": [
				{
					"name": "Getcitymatch",
					"value": "Getcitymatch",
					"action": "Gets a similarity key for matching purposes for city name data",
					"description": "Gets a similarity key for matching purposes for city name data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getcitymatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getcitymatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"City Name Similarity Key"
					],
					"operation": [
						"Getcitymatch"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"City Name Similarity Key"
					],
					"operation": [
						"Getcitymatch"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"required": true,
			"description": "City name from which to generate similarity key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"City Name Similarity Key"
					],
					"operation": [
						"Getcitymatch"
					]
				}
			}
		},
];
