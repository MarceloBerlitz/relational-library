package dev.berlitz.RelationalLibraryApi.integration.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class GetAll<T> {
    private List<T> itens;
}
