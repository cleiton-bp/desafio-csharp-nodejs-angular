# Rotas - Produtos

## Buscar todos os produtos
- **Método**: ***(GET)***
- **Endpoint**: `http://localhost:3000/products`
  
  **Exemplo de resposta**:

    ```json
    [
        {
            "id": 1,
            "name": "laranja",
            "description": "laranja do sul",
            "price": 15.32,
            "categoryId": 1,
            "category": {
                "id": 1,
                "name": "fruta"
            }
        },
        {
            "id": 2,
            "name": "melancia",
            "description": "melancia do norte",
            "price": 15.43,
            "categoryId": 1,
            "category": {
                "id": 1,
                "name": "fruta"
            }
        },
        {
            "id": 3,
            "name": "bergamota",
            "description": "bergamota do sul",
            "price": 15.12,
            "categoryId": null,
            "category": null
        }
    ]
    ```

## Buscar produto por ID
- **Método**: ***(GET)***
- **Endpoint**: `http://localhost:3000/products/{id}`
  
  **Exemplo de resposta**:

    ```json
    {
        "id": 1,
        "name": "laranja",
        "description": "laranja do sul",
        "price": 15.32,
        "categoryId": 1,
        "category": {
            "id": 1,
            "name": "fruta"
        }
    }
    ```

## Criar novo produto
- **Método**: ***(POST)***
- **Endpoint**: `http://localhost:3000/products`

> 
>    **Corpo da requisição - sem vincular uma categoria**:
>
>    ```json
>    {
>        "name": "laranja",
>        "description": "laranja azul",
>        "price": 15.32
>    }
>   ```
>   **Exemplo de resposta sem vinculação a categoria**:
>   ```json
>   {
>       "id": 5,
>       "name": "laranja",
>       "description": "laranja verde",
>       "price": 15.32,
>        "categoryId": null,
>        "category": null
>    }
>    ```
___
___
>    **Corpo da requisição - vinculando uma categoria**:
>
>    ```json
>    {
>        "name": "laranja",
>        "description": "laranja verde",
>        "price": 15.32,
>        "categoryId": 1
>    }
>    ```
>    **Exemplo de resposta com vinculação a categoria**:
>   ```json
>    {
>        "id": 4,
>        "name": "laranja",
>        "description": "laranja verde",
>        "price": 15.32,
>        "categoryId": 1,
>        "category": null
>    }


## Atualizar produto
- **Método**: ***(PUT)***
- **Endpoint**: `http://localhost:3000/products/{id}`

  **Corpo da requisição**:

    ```json
    {
        "name": "laranja",
        "description": "laranja do sul",
        "price": 5.44,
        "categoryId": 2
    }
    ```
    **Exemplo de resposta**:
    ```json
    {
        "id": 1,
        "name": "laranja",
        "description": "laranja do sul",
        "price": 5.44,
        "categoryId": 2
    }
    ```

## Deletar produto
- **Método**: ***(DELETE)***
- **Endpoint**: `http://localhost:3000/products/{id}`

    **Exemplo de resposta**:
    ```
        Product deleted successfully
    ```

# Rotas - Categorias  

## Buscar todos os produtos
- **Método**: ***(GET)***
- **Endpoint**: `http://localhost:3000/categories`
  
  **Exemplo de resposta**:

    ```json
    [
        {
            "id": 1,
            "name": "frutas do sul"
        },
        {
            "id": 2,
            "name": "frutas do norte"
        }
    ]
    ```

## Buscar categoria por ID
- **Método**: ***(GET)***
- **Endpoint**: `http://localhost:3000/categories/{id}`
  
  **Exemplo de resposta**:

    ```json
    {
        "id": 1,
        "name": "frutas do sul"
    }
    ```
- **Criar nova categoria**: ***(POST)*** `http://localhost:3000/categories`

## Criar novo Categoria
- **Método**: ***(POST)***
- **Endpoint**: `http://localhost:3000/categories`

 
    **Corpo da requisição**:

    ```json
    {
        "name": "laranja"
    }
   ```

## Atualizar Categoria
- **Método**: ***(PUT)***
- **Endpoint**: `http://localhost:3000/categories/{id}`

  **Corpo da requisição**:

    ```json
    {
        "name": "frutas"
    }
    ```
    **Exemplo de resposta**:
    ```json
    {
        "id": 1,
        "name": "frutas"
    }
    ```

## Deletar Categoria
- **Método**: ***(DELETE)***
- **Endpoint**: `http://localhost:3000/categories/{id}`

    **Exemplo de resposta**:
    ```
        Category deleted successfully
    ```