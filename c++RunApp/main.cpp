#include <iostream>
#include <unistd.h>
#include <cstdlib>


int main(int argc, char** argv) {
	char buffer[FILENAME_MAX];
    if (getcwd(buffer, sizeof(buffer)) != NULL) {
        std::cout << "Posición actual del directorio: " << buffer << std::endl;
    } else {
        std::cerr << "Error al obtener la posición actual del directorio." << std::endl;
        return 1;
    }
    
	const char* dir = buffer;
    
    if (chdir(dir) != 0) {
        std::cerr << "Error al cambiar al directorio: " << dir << std::endl;
        return 1;
    }

    const char* command = "npm start";
    if (system(command) != 0) {
        std::cerr << "Error al ejecutar el comando: " << command << std::endl;
        return 1;
    }

    
	return 0;
}
