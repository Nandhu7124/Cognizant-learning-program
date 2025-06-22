import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "T-Shirt", "Fashion"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Book", "Education"),
            new Product(105, "Shoes", "Fashion")
        };

        System.out.println("Linear Search");
        Product result1 = Search.linearSearch(products, "Book");
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search");
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product result2 = Search.binarySearch(products, "Book");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
