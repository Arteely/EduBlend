export default function StudentBar() {
    return (
        

<div class="relative overflow-x-auto border p-4 border-purple mt-4 sm:rounded-lg">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-purple rounded-lg w-80 bg-white focus:ring-purple focus:border-purple" placeholder="Search for users"/>
        </div>
    </div>
    <table class="w-full text-sm text-left text-purple">
        <thead class="text-sm text-purple">
            <tr>
                <th scope="col" class="px-6 py-3 font-normal">
                    Student Name
                </th>
                <th scope="col" class="px-6 py-3 font-normal">
                    Parent Name
                </th>
                <th scope="col" class="px-6 py-3 font-normal">
                    Progress
                </th>
                <th scope="col" class="px-6 py-3 font-normal">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b border-light-purple hover:bg-light-purple rounded-xl">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">A</h2>
                    <div class="ps-3">
                        <div class="text-purple font-semibold">Neil Sims</div>
                        <div class="font-normal text-purple">neil.sims@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    Artem Artemyev
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 9/10
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b rounded-full border-light-purple hover:bg-light-purple">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">A</h2>
                    <div class="ps-3">
                        <div class="text-purple font-semibold">Bonnie Green</div>
                        <div class="font-normal text-purple">bonnie@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                Artem Artemyev
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 9/10
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b border-light-purple hover:bg-light-purple">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">A</h2>
                    <div class="ps-3">
                        <div class="text-purple font-semibold">Jese Leos</div>
                        <div class="font-normal text-purple">jese@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                Artem Artemyev
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 9/10
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b border-light-purple hover:bg-light-purple">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">A</h2>
                    <div class="ps-3">
                        <div class="text-purple font-semibold">Thomas Lean</div>
                        <div class="font-normal text-purple">thomes@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                Artem Artemyev
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 9/10
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b border-light-purple hover:bg-light-purple">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">A</h2>
                    <div class="ps-3">
                        <div class="text-purple font-semibold">Leslie Livingston</div>
                        <div class="font-normal text-purple">leslie@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                Artem Artemyev
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> 9/10
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b border-light-purple hover:bg-light-purple">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <h2 class="w-10 h-10 text-xl rounded-full bg-purple flex items-center justify-center">A</h2>
                    <div class="ps-3">
                        <div class="text-purple font-semibold">Leslie Livingston</div>
                        <div class="font-normal text-purple">leslie@gmail.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                Artem Artemyev
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> 9/10
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    );
}