export default () => ({
	"$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
	"type": "AdaptiveCard",
	"version": "1.0",
	"speak": "<s>Weather forecast for Monday is high of 62 and low of 42 degrees with a 20% chance of rain</s><s>Winds will be 5 mph from the northeast</s>",
	"backgroundImage": "http://messagecardplayground.azurewebsites.net/assets/Mostly Cloudy-Background-Dark.jpg",
	"body": [
		{
			"type": "ColumnSet",
			"columns": [
				{
					"type": "Column",
					"size": "35",
					"items": [
						{
							"type": "Image",
							"url": "http://messagecardplayground.azurewebsites.net/assets/Mostly Cloudy-Square.png",
							"size": "stretch"
						}
					]
				},
				{
					"type": "Column",
					"size": "65",
					"items": [
						{
							"type": "TextBlock",
							"text": "**Monday April 1**",
							"size": "large"
						},
						{
							"type": "TextBlock",
							"text": "63 / 42",
							"size": "medium",
							"separation": "none"
						},
						{
							"type": "TextBlock",
							"isSubtle": true,
							"text": "20% chance of rain",
							"separation": "none"
						},
						{
							"type": "TextBlock",
							"isSubtle": true,
							"text": "Winds 5 mph NE",
							"separation": "none"
						}
					]
				}
			]
		},
		{
			"type": "ColumnSet",
			"columns": [
				{
					"type": "Column",
					"size": "20",
					"items": [
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "Fri"
						},
						{
							"type": "Image",
							"size": "auto",
							"url": "http://messagecardplayground.azurewebsites.net/assets/Mostly Cloudy-Square.png"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "62"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"isSubtle": true,
							"text": "523"
						}
					],
					"selectAction": {
						"type": "Action.OpenUrl",
						"url": "http://www.microsoft.com"
					}
				},
				{
					"type": "Column",
					"size": "20",
					"items": [
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "Sat"
						},
						{
							"type": "Image",
							"size": "auto",
							"url": "http://messagecardplayground.azurewebsites.net/assets/Drizzle-Square.png"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "60"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"isSubtle": true,
							"text": "48"
						}
					],
					"selectAction": {
						"type": "Action.OpenUrl",
						"url": "http://www.microsoft.com"
					}
				},
				{
					"type": "Column",
					"size": "20",
					"items": [
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "Sun"
						},
						{
							"type": "Image",
							"size": "auto",
							"url": "http://messagecardplayground.azurewebsites.net/assets/Mostly Cloudy-Square.png"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "59"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"isSubtle": true,
							"text": "49"
						}
					],
					"selectAction": {
						"type": "Action.OpenUrl",
						"url": "http://www.microsoft.com"
					}
				},
				{
					"type": "Column",
					"size": "20",
					"items": [
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "Mon"
						},
						{
							"type": "Image",
							"size": "auto",
							"url": "http://messagecardplayground.azurewebsites.net/assets/Mostly Cloudy-Square.png"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"text": "64"
						},
						{
							"type": "TextBlock",
							"horizontalAlignment": "center",
							"isSubtle": true,
							"text": "51"
						}
					],
					"selectAction": {
						"type": "Action.OpenUrl",
						"url": "http://www.microsoft.com"
					}
				}
			]
		}
	]
})
