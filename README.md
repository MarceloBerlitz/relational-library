## POST: /clientes
### Request Body
```json
{
	"nome": "string"
}
```

## GET: /clientes
### Response Body
```json
{
	"itens": [{
		"codigo": "uuid",
		"nome": "string"
	}, {
		"codigo": "uuid",
		"nome": "string"
	}]
}
```

## GET: /clientes/:codigo
### Response Body
```json
{
	"nome": "string",
	"livros": [{
		"codigo": "uuid",
		"titulo": "string",
		"descricao": "string",
		"ano": 0,
		"codigoCliente": "uuid",
		"autores": [{
				"codigo": "uuid",
				"nome": "string"
			},
			{
				"codigo": "uuid",
				"nome": "string"
			}
		]
	}]
}
```

## PUT: /clientes/:codigo
### Request Body
```json
{
	"nome": "string"
}
```
## DELETE: /clientes/:codigo

## POST: /autores
### Request Body
```json 
{
	"nome": "string"
}
```

## GET: /autores
### Response Body
```json
{
	"itens": [{
		"codigo": "uuid",
		"nome": "string"
	}, {
		"codigo": "uuid",
		"nome": "string"
	}]
}
```

## PUT: /autores/:codigo
### Request Body
```json
{
	"nome": "string"
}
```

## DELETE: /autores/:codigo

## POST: /livros
### Request Body
```json
{
	"titulo": "string",
	"descricao": "string",
	"ano": 0,
	"autores": [
		"uuid", "uuid"
	]
}
```

## GET: /livros
### Response Body
```json
{
	"codigo": "uuid",
	"titulo": "string",
	"descricao": "string",
	"ano": 0,
	"codigoCliente": "uuid",
	"autores": [{
			"codigo": "uuid",
			"nome": "string"
		},
		{
			"codigo": "uuid",
			"nome": "string"
		}
	]
}
```

## PUT: /livros/:codigo
### Request Body
```json
{
	"titulo": "string",
	"descricao": "string",
	"ano": 0,
	"autores": [
		"uuid", "uuid"
	]
}
```
## DELETE: /livros/:codigo
