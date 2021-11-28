## POST: /usuarios
### Request Body
```json
{
	"nome": "string",
	"email": "string",
	"tipo": "funcionario | cliente",
	"senha": "string"
}
```

## GET: /usuarios
### Response Body
```json
{
	"itens": [{
		"codigo": 0,
		"nome": "string",
		"email": "string",
		"tipo": "funcionario | cliente"
	}, {
		"codigo": 0,
		"nome": "string",
		"email": "string",
		"tipo": "funcionario | cliente"
	}]
}
```

## GET: /usuarios/:codigo
### Response Body
```json
{
	"codigo": 0,
	"nome": "string",
	"email": "string",
	"tipo": "funcionario | cliente"
	"livros": [{
		"codigo": 0,
		"titulo": "string",
		"descricao": "string",
		"ano": 0,
		"codigoCliente": 0,
		"autores": [ "string", "string" ]
	}]
}
```

## PUT: /usuarios/:codigo
### Request Body
```json
{
	"codigo": 0,
	"nome": "string",
	"email": "string",
	"senha": "string",
	"tipo": "funcionario | cliente"
}
```
## DELETE: /usuarios/:codigo

## GET: /livros?busca=str
### Response Body
```json
{
	"items": [{
		"codigo": 0,
		"titulo": "string",
		"descricao": "string",
		"ano": 0,
		"autores": ["string", "string"]

	}]
}
```
## POST: /livros
### Request Body
```json
{
	"titulo": "string",
	"descricao": "string",
	"ano": 0,
	"autores": ["string", "string"]
}
```
## PUT: /livros/:codigo
### Request Body
```json
{
	"codigo": 0,
	"titulo": "string",
	"descricao": "string",
	"ano": 0,
	"autores": ["string", "string"],
	"codigoUsuario": 0
}
```
## GET: /livros/:codigo
### Request Body
```json
{
        "codigo": 0
	"titulo": "string",
	"descricao": "string",
	"ano": 0,
	"autores": ["string", "string"],
	"usuario": {
		"codigo": 0,
		"nome": "string",
		"email": "string",
		"senha": "string",
		"tipo": "funcionario | cliente"
	}
}
```
## DELETE: /livros/:codigo

## POST: /login
### Request Body
```json
{
        "email": "string",
	"senha": "string"
}
```


